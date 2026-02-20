import wave
import math
import struct
import os

def generate_tone(filename, frequency=440, duration=1.0, volume=0.5):
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        data = []
        for i in range(n_samples):
            t = float(i) / sample_rate
            # Simple fade out
            env = max(0.0, 1.0 - t/duration)
            value = int(volume * env * 32767.0 * math.sin(2.0 * math.pi * frequency * t))
            data.append(struct.pack('<h', value))
            
        wav_file.writeframes(b''.join(data))

def generate_noise(filename, duration=0.5, volume=0.5):
    import random
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        data = []
        for i in range(n_samples):
            # Simple fade out
            env = max(0, 1.0 - i/n_samples)
            value = int(volume * env * 32767.0 * (random.random() * 2 - 1))
            data.append(struct.pack('<h', value))
            
        wav_file.writeframes(b''.join(data))

def generate_bgm(filename, duration=48.0, volume=0.5):
    import random
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    # "Kazekiri" style: Fast, driving Tsugaru Shamisen rock. BPM roughly 160.
    # 48 seconds = 128 beats = 32 bars at 160 BPM.
    tempo = 160
    beat_sec = 60.0 / tempo
    sixteenth = beat_sec / 4.0
    
    def repeat(seq, times):
        res = []
        for _ in range(times): res.extend(seq)
        return res

    # --- Shamisen Melody (Lead) ---
    # Fast 16th note riffs in D minor pentatonic (D, F, G, A, C)
    # Intro riff (Kazekiri style: intense, repetitive motif)
    m_intro1 = ['D5','D5','F5','F5', 'G5','A5','G5','F5', 'D5','D5','C5','C5', 'D5','-','-','-']
    m_intro2 = ['D5','D5','F5','F5', 'G5','A5','C6','A5', 'G5','A5','F5','G5', 'D5','-','-','-']
    m_intro3 = ['D5','D5','F5','D5', 'G5','F5','A5','G5', 'C6','A5','G5','F5', 'D5','F5','C5','D5']
    m_intro4 = ['A5','A5','G5','F5', 'D5','C5','D5','F5', 'G5','A5','C6','A5', 'D6','-','-','-']
    
    seq_intro = m_intro1 + m_intro2 + m_intro1 + m_intro4

    # A-Melo (Rhythmic, lower register, builds up)
    m_A1 = ['D4','D4','-','D4', 'F4','-','G4','-', 'A4','A4','G4','F4', 'D4','C4','D4','-']
    m_A2 = ['D4','D4','-','D4', 'F4','-','G4','-', 'A4','A4','C5','A4', 'G4','-','-','-']
    seq_A = repeat(m_A1 + m_A2, 4)

    # B-Melo (Rising chord feel, syncopated)
    m_B1 = ['G4','-','A4','-', 'C5','-','D5','-', 'C5','-','A4','G4', 'F4','G4','A4','-']
    m_B2 = ['G4','-','A4','-', 'C5','-','D5','-', 'F5','E5','D5','C5', 'D5','-','-','-']
    seq_B = repeat(m_B1 + m_B2, 2)

    # Sabi (Chorus - High energy, fast tremolo feel)
    m_S1 = ['D5','-','C5','A4', 'G4','F4','D4','F4', 'G4','-','A4','C5', 'D5','-','A5','G5']
    m_S2 = ['F5','-','D5','C5', 'A4','G4','F4','G4', 'A4','G4','F4','D4', 'C4','D4','F4','G4']
    m_S3 = ['A4','A4','C5','C5', 'D5','D5','F5','F5', 'G5','G5','A5','A5', 'C6','C6','D6','D6']
    m_S4 = ['F6','F6','D6','C6', 'A5','G5','A5','C6', 'D6','-','-','-','-','-','-','-']
    seq_Sabi = repeat(m_S1 + m_S2, 3) + m_S3 + m_S4

    melody_seq = seq_intro + seq_A + seq_B + seq_Sabi # 4+8+4+16 = 32 bars

    # --- Bass & Rhythm Guitar (Synth) ---
    # Driving 8th notes
    b_D = repeat(['D2','D2','D2','D2'], 4)
    b_Bb = repeat(['Bb1','Bb1','Bb1','Bb1'], 4)
    b_C = repeat(['C2','C2','C2','C2'], 4)
    b_A = repeat(['A1','A1','A1','A1'], 4)
    b_G = repeat(['G1','G1','G1','G1'], 4)
    b_F = repeat(['F1','F1','F1','F1'], 4)
    
    prog_intro = b_D + b_Bb + b_C + b_D
    prog_A = b_D + b_D + b_Bb + b_C
    prog_B = b_Bb + b_C + b_D + b_A
    prog_Sabi = b_D + b_Bb + b_F + b_C
    
    # 2 notes per beat = 8 per bar = 16 sixteenths (we map 1 bass note per 8th note, i.e., 2 sixteenths)
    def expand_bass(prog):
        expanded = []
        for n in prog:
            expanded.extend([n, '-'])
        return expanded

    bass_seq = expand_bass(prog_intro + repeat(prog_A, 2) + prog_B + repeat(prog_Sabi, 4))

    # --- Drums (Fast Rock Beat) ---
    # D: Kick, S: Snare, H: Hihat closed, O: Hihat open, C: Crash
    # Standard rock beat driving 16th notes
    d_rock = ['D','H','S','H', 'D','D','S','H', 'D','H','S','H', 'D','D','S','O']
    d_fill = ['D','H','S','D', 'S','D','S','S', 'D','D','D','D', 'S','S','S','S']
    d_crash = ['C','H','S','H', 'D','D','S','H', 'D','H','S','H', 'D','D','S','O']

    taiko_seq = []
    taiko_seq += repeat(d_rock, 3) + d_fill # Intro
    taiko_seq += repeat(d_rock, 7) + d_fill # A
    taiko_seq += repeat(d_rock, 3) + d_fill # B
    taiko_seq += repeat(d_crash + d_rock + d_rock + d_rock, 3) + d_crash + d_rock + d_rock + d_fill # Sabi
    
    def note_to_freq(note):
        if note == '-': return 0.0
        notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        if note[:-1] not in notes: return 0.0
        octave = int(note[-1])
        key = notes.index(note[:-1])
        n = key + (octave - 4) * 12
        return 440.0 * (2.0 ** ((n - 9) / 12.0))

    data = []
    
    # LPF state
    lpf_alpha = 0.5 # Brighter than before to cut through the mix like rock
    lpf_state = 0.0
    
    for i in range(n_samples):
        t = float(i) / sample_rate
        
        step_16th = int((t / sixteenth))
        t_16th = t % sixteenth
        
        m_idx = step_16th % len(melody_seq)
        b_idx = step_16th % len(bass_seq)
        t_idx = step_16th % len(taiko_seq)
        
        sample_val = 0.0
        
        # 1. Lead Shamisen (Hard Tsugaru style pluck)
        mel_note = melody_seq[m_idx]
        mel_f = note_to_freq(mel_note)
        if mel_f > 0:
            env_val = math.exp(-15.0 * t_16th) # Sharp decay
            # Bright, buzzy, sawatari-style tone (Sawtooth + Triangle)
            wave1 = (t_16th * mel_f) % 1.0 * 2.0 - 1.0 # Sawtooth
            wave2 = math.asin(math.sin(2.0 * math.pi * mel_f * t_16th)) / (math.pi/2) # Triangle
            sample_val += (wave1 * 0.4 + wave2 * 0.6) * env_val * 0.35
            
        # 2. Bass & Rhythm
        bass_note = bass_seq[b_idx]
        bass_f = note_to_freq(bass_note)
        if bass_f > 0:
            env_bass = math.exp(-10.0 * t_16th)
            # Square wave bass for rock electronic feel
            wave_bass = 1.0 if math.sin(2.0 * math.pi * bass_f * t_16th) > 0 else -1.0
            sample_val += wave_bass * env_bass * 0.15
            
        # 3. Drums
        drum_hit = taiko_seq[t_idx]
        if drum_hit == 'D' or drum_hit == 'C': # Kick
            env_don = math.exp(-20.0 * t_16th)
            pitch_don = max(40.0, 150.0 * math.exp(-40.0 * t_16th))
            sample_val += math.sin(2.0 * math.pi * pitch_don * t_16th) * env_don * 0.6
            if drum_hit == 'C': # Crash Cymbal noise long decay
                env_crash = math.exp(-3.0 * t_16th)
                noise_c = random.random() * 2.0 - 1.0
                sample_val += noise_c * env_crash * 0.3
        elif drum_hit == 'S': # Snare
            env_snare = math.exp(-20.0 * t_16th)
            noise_s = random.random() * 2.0 - 1.0
            pitch_s = 200.0 * math.exp(-30.0 * t_16th)
            body_s = math.sin(2.0 * math.pi * pitch_s * t_16th)
            sample_val += (noise_s * 0.7 + body_s * 0.3) * env_snare * 0.5
        elif drum_hit == 'H' or drum_hit == 'O': # Hihats
            env_hh = math.exp(-40.0 * t_16th) if drum_hit == 'H' else math.exp(-15.0 * t_16th)
            noise_h = random.random() * 2.0 - 1.0
            sample_val += noise_h * env_hh * 0.15

        # LPF
        lpf_state = lpf_state + lpf_alpha * (sample_val - lpf_state)
        filtered_val = lpf_state
        
        # Overdrive/Compression to make it sound full and loud (Rock Mix)
        filtered_val = math.tanh(filtered_val * 2.0)
        
        value = int(volume * filtered_val * 32767.0)
        value = max(-32768, min(32767, value))
        data.append(struct.pack('<h', value))
        
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        wav_file.writeframes(b''.join(data))

def generate_chime(filename, duration=1.2, volume=0.5):
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    # Bright C Major 7th chord (C, E, G, B) + high C
    freqs = [523.25, 659.25, 783.99, 987.77, 1046.50]
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        data = []
        for i in range(n_samples):
            t = float(i) / sample_rate
            
            # Fast attack, slow decay envelope
            env = math.exp(-3.0 * t) 
            
            # Mix the frequencies
            val = 0.0
            for (idx, freq) in enumerate(freqs):
                # stagger the start of each note slightly for a glissando effect
                delay = idx * 0.05
                if t >= delay:
                    note_t = t - delay
                    note_env = math.exp(-4.0 * note_t)
                    val += math.sin(2.0 * math.pi * freq * note_t) * note_env
            
            val = val / float(len(freqs)) * 2.0 # Normalize and boost
            
            value = int(volume * env * 32767.0 * val)
            # Clip
            value = max(-32768, min(32767, value))
            data.append(struct.pack('<h', value))
            
        wav_file.writeframes(b''.join(data))

def generate_click(filename, duration=0.03, volume=0.5):
    import random
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        data = []
        for i in range(n_samples):
            t = float(i) / sample_rate
            # Very sharp envelope for a "tick" noise burst (mechanical switch)
            env = math.exp(-150.0 * t) 
            
            # mechanical click is mostly high-frequency noise and a fast transient
            val = (random.random() * 2.0 - 1.0) * env
            
            value = int(volume * val * 32767.0)
            data.append(struct.pack('<h', value))
            
        wav_file.writeframes(b''.join(data))

os.makedirs('assets/audio', exist_ok=True)

# Generate Placeholders (renaming to .mp3 so HTML tag works without change, browsers detect content type)
generate_bgm('assets/audio/bgm_main.mp3', volume=0.4) # Lively Wafu loop
generate_tone('assets/audio/se_decision.mp3', 880, 0.1, 0.5) # High beep
generate_tone('assets/audio/se_cancel.mp3', 440, 0.1, 0.5) # Low beep
generate_noise('assets/audio/se_slash.mp3', 0.2, 0.6) # Noise for slash
# 'se_battle' is actually mapped to the 'ok' / get card sound in JS
generate_chime('assets/audio/se_battle.mp3', 1.5, 0.7) # Bright exciting chime
generate_click('assets/audio/se_click.mp3', 0.05, 0.3) # Soft UI click
