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
            env = max(0, 1.0 - t/duration)
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

def generate_bgm(filename, duration=16.0, volume=0.4):
    sample_rate = 44100
    n_samples = int(sample_rate * duration)
    
    # Pop/Cute arpeggio sequence (C E G E, F A C A, G B D B, C E G E)
    notes = [
        261.63, 329.63, 392.00, 329.63, 
        261.63, 329.63, 392.00, 329.63,
        349.23, 440.00, 523.25, 440.00,
        349.23, 440.00, 523.25, 440.00,
        392.00, 493.88, 587.33, 493.88,
        392.00, 493.88, 587.33, 493.88,
        261.63, 329.63, 392.00, 329.63,
        261.63, 329.63, 392.00, 329.63,
    ]
    
    tempo = 120 # bpm
    step_duration = 60.0 / tempo / 2 # 8th notes
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        data = []
        for i in range(n_samples):
            t = float(i) / sample_rate
            note_idx = int((t / step_duration) % len(notes))
            freq = notes[note_idx]
            
            # Envelope per note (plucky, staccato sound)
            t_in_note = t % step_duration
            env = max(0, 1.0 - (t_in_note / (step_duration * 0.8)))
            
            # Simple soft synth tone (sine + octave sine harmonic)
            val = math.sin(2.0 * math.pi * freq * t_in_note) + (0.5 * math.sin(2.0 * math.pi * freq * 2 * t_in_note))
            val = val / 1.5
            
            value = int(volume * env * 32767.0 * val)
            data.append(struct.pack('<h', value))
            
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
            val = 0
            for (idx, freq) in enumerate(freqs):
                # stagger the start of each note slightly for a glissando effect
                delay = idx * 0.05
                if t >= delay:
                    note_t = t - delay
                    note_env = math.exp(-4.0 * note_t)
                    val += math.sin(2.0 * math.pi * freq * note_t) * note_env
            
            val = val / len(freqs) * 2.0 # Normalize and boost
            
            value = int(volume * env * 32767.0 * val)
            # Clip
            value = max(-32768, min(32767, value))
            data.append(struct.pack('<h', value))
            
        wav_file.writeframes(b''.join(data))

os.makedirs('assets/audio', exist_ok=True)

# Generate Placeholders (renaming to .mp3 so HTML tag works without change, browsers detect content type)
generate_bgm('assets/audio/bgm_main.mp3', duration=16.0, volume=0.4) # Cute loop for BGM
generate_tone('assets/audio/se_decision.mp3', 880, 0.1, 0.5) # High beep
generate_tone('assets/audio/se_cancel.mp3', 440, 0.1, 0.5) # Low beep
generate_noise('assets/audio/se_slash.mp3', 0.2, 0.6) # Noise for slash
# 'se_battle' is actually mapped to the 'ok' / get card sound in JS
generate_chime('assets/audio/se_battle.mp3', 1.5, 0.7) # Bright exciting chime
