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

def generate_bgm(filename, duration=52.9655, volume=0.5):
    import random
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    # Fast, lively tempo like "Gidayou" or comic ninja BGM
    tempo = 145
    beat_sec = 60.0 / tempo
    sixteenth = beat_sec / 4.0
    
    # Japanese Minyo/In/Yo scale for a lively traditional feel
    def repeat(seq, times):
        res = []
        for _ in range(times): res.extend(seq)
        return res

    # 笛 (Fue / Flute) Melody - 1 bar = 16 sixteenths
    # Intro (4 bars)
    m_intro1 = ['D5','-','D5','-','F5','-','G5','-', 'A5','C6','A5','G5','C6','A5','G5','F5']
    m_intro2 = ['D5','-','D5','-','F5','-','G5','-', 'A5','-','-','-','A5','-','-','-']
    m_intro3 = ['D5','-','D5','-','F5','-','G5','-', 'A5','C6','A5','G5','C6','A5','G5','F5']
    m_intro4 = ['D5','C5','D5','F5','G5','F5','G5','A5', 'C6','-','-','-','C6','-','-','-']
    seq_intro = m_intro1 + m_intro2 + m_intro3 + m_intro4

    # A-melo (8 bars) - calmer, lower register
    m_A1 = ['D4','-','F4','G4','A4','-','G4','F4', 'D4','-','C4','-','D4','-','-','-']
    m_A2 = ['D4','-','F4','G4','A4','C5','D5','C5', 'A4','-','G4','-','F4','G4','A4','-']
    seq_A = repeat(m_A1 + m_A2, 4)

    # B-melo (4 bars) - building tension, syncopated
    m_B1 = ['G4','A4','C5','-','A4','G4','F4','-', 'G4','A4','C5','-','D5','C5','A4','G4']
    m_B2 = ['F4','G4','A4','-','G4','F4','D4','-', 'C4','D4','F4','G4','A4','-','-','-']
    seq_B = repeat(m_B1 + m_B2, 2)

    # Chorus / Sabi (8 bars) - High, intense, emotional
    m_S1 = ['A4','C5','D5','-','C5','D5','F5','D5', 'C5','A4','G4','-','F4','G4','A4','-']
    m_S2 = ['A4','C5','D5','-','C5','D5','F5','G5', 'A5','G5','F5','D5','C5','D5','D5','-']
    seq_Sabi = repeat(m_S1 + m_S2, 4)

    # Outro (8 bars) - returning to intro and fading
    m_out1 = ['G5','-','A5','C6','D6','-','C6','A5', 'G5','-','F5','-','D5','F5','G5','-']
    m_out2 = ['G5','-','A5','C6','D6','-','C6','A5', 'G5','-','F5','G5','D5','-','-','-']
    seq_Outro = repeat(m_out1 + m_out2, 2) + repeat(['-']*16, 4) # 4 bars melody, 4 bars break

    melody_seq = seq_intro + seq_A + seq_B + seq_Sabi + seq_Outro # Total 4+8+4+8+8 = 32 bars. 32 * 16 = 512 items.
    
    # 三味線 (Shamisen)
    s_int = ['D3','A3','D4','A3', 'F3','C4','F4','C4', 'G3','D4','G4','D4', 'A3','E4','A4','E4']
    s_A   = ['D3','-','A3','-', 'D3','-','A3','-', 'F3','-','C4','-', 'G3','-','D4','-']
    s_B   = ['C3','G3','C4','G3', 'F3','C4','F4','C4', 'Bb2','F3','Bb3','F3', 'A2','E3','A3','A3']
    s_S   = ['D3','A3','D4','A3', 'F3','C4','F4','C4', 'G3','D4','G4','D4', 'A3','E4','A4','E4']
    
    shamisen_seq = repeat(s_int, 4) + repeat(s_A, 8) + repeat(s_B, 4) + repeat(s_S, 8) + repeat(s_int, 4) + repeat(['-']*16, 4)
    # Total 32 bars = 512 items

    # 和太鼓 (Taiko)
    t_int = ['D','-','K','-', 'D','D','K','-', 'D','-','K','-', 'D','K','D','K']
    t_A   = ['D','-','K','-', 'D','-','K','-', 'D','-','K','-', 'D','-','K','-']
    t_B   = ['D','K','D','K', 'D','K','D','K', 'D','D','K','-', 'D','K','D','K']
    t_S   = ['D','-','K','-', 'D','D','K','-', 'D','-','K','-', 'D','K','D','K']
    t_break = ['D','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']
    
    taiko_seq = repeat(t_int, 4) + repeat(t_A, 8) + repeat(t_B, 4) + repeat(t_S, 8) + repeat(t_int, 4) + repeat(t_break, 4)
    # Total 32 bars = 512 items

    def note_to_freq(note):
        if note == '-': return 0.0
        notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        if note[:-1] not in notes: return 0.0
        octave = int(note[-1])
        key = notes.index(note[:-1])
        n = key + (octave - 4) * 12
        return 440.0 * (2.0 ** ((n - 9) / 12.0))

    data = []
    
    # Simple 1-pole IIR Low-Pass Filter state setup
    # alpha controls the cutoff. Lower alpha = darker tone (more high-frequency cutoff)
    lpf_alpha = 0.35 
    lpf_state = 0.0
    
    for i in range(n_samples):
        t = float(i) / sample_rate
        
        step_16th = int((t / sixteenth))
        t_16th = t % sixteenth
        
        m_idx = step_16th % len(melody_seq)
        s_idx = step_16th % len(shamisen_seq)
        t_idx = step_16th % len(taiko_seq)
        
        sample_val = 0.0
        
        # 1. Fue (Flute)
        mel_note = melody_seq[m_idx]
        mel_f = note_to_freq(mel_note)
        if mel_f > 0:
            # Soft attack and gentle release
            attack = min(1.0, t_16th * 15.0) 
            env_mel = attack * (1.0 - (t_16th / sixteenth) * 0.15)
            # Vibrato
            vib = 1.0 + 0.005 * math.sin(2.0 * math.pi * 5.0 * t)
            # Pure sine wave, no harmonics for a rounder tone
            wave1 = math.sin(2.0 * math.pi * mel_f * vib * t_16th)
            noise = (random.random() * 2.0 - 1.0) * 0.01
            sample_val += (wave1 + noise) * env_mel * 0.5
            
        # 2. Shamisen
        sham_note = shamisen_seq[s_idx]
        sham_f = note_to_freq(sham_note)
        if sham_f > 0:
            # Soft pluck attack instead of instant on
            attack_s = min(1.0, t_16th * 40.0)
            env_sham = attack_s * math.exp(-8.0 * t_16th) 
            # Warmer tone (Triangle only, no Saw/Square)
            wave_s = math.asin(math.sin(2.0 * math.pi * sham_f * t_16th)) / (math.pi/2)
            sample_val += wave_s * env_sham * 0.45
            
        # 3. Taiko (Drums)
        drum_hit = taiko_seq[t_idx]
        if drum_hit == 'D': # Don (Low Taiko)
            env_don = math.exp(-6.0 * t_16th)
            pitch_don = max(40.0, 100.0 * math.exp(-15.0 * t_16th))
            sample_val += math.sin(2.0 * math.pi * pitch_don * t_16th) * env_don * 0.7
        elif drum_hit == 'K': # Ka (Rim/Wood block)
            env_ka = math.exp(-25.0 * t_16th)
            # Low tone wood block
            wood = math.sin(2.0 * math.pi * 450.0 * t_16th)
            sample_val += wood * env_ka * 0.35

        # Apply Low-Pass Filter (LPF) to remove remaining 'piko piko' harshness
        lpf_state = lpf_state + lpf_alpha * (sample_val - lpf_state)
        filtered_val = lpf_state
        
        # Soft clipping just to keep it in range, instead of hard overdrive
        if filtered_val > 1.0: filtered_val = 1.0
        elif filtered_val < -1.0: filtered_val = -1.0
        
        # Apply slight volume compression
        filtered_val = math.tanh(filtered_val * 1.1)
        
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
