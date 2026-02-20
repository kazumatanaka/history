import wave
import struct

threshold = 1000  # Higher silence threshold to catch fading noise
infile = 'assets/audio/temp_newbgm.wav'
outfile = 'assets/audio/temp_out.wav'

with wave.open(infile, 'rb') as wav_in:
    nchannels = wav_in.getnchannels()
    sampwidth = wav_in.getsampwidth()
    framerate = wav_in.getframerate()
    nframes = wav_in.getnframes()
    
    # Read all frames
    audio_data = wav_in.readframes(nframes)

# Unpack
fmt = f"<{nframes * nchannels}h"
samples = list(struct.unpack(fmt, audio_data))

# Find start index
start_idx = 0
for i in range(0, len(samples), nchannels):
    vol = max(abs(samples[i + c]) for c in range(nchannels))
    if vol > threshold:
        start_idx = i
        break

# Find end index
end_idx = len(samples)
for i in range(len(samples) - nchannels, -1, -nchannels):
    vol = max(abs(samples[i + c]) for c in range(nchannels))
    if vol > threshold:
        end_idx = i + nchannels
        break

# Safely handle completely silent files
if start_idx >= end_idx:
    start_idx = 0
    end_idx = len(samples)

# Trim and reduce volume by 50%
out_samples = []
for s in samples[start_idx:end_idx]:
    val = int(s * 0.5)
    out_samples.append(max(-32768, min(32767, val)))

# Write output
out_data = struct.pack(f"<{len(out_samples)}h", *out_samples)
with wave.open(outfile, 'wb') as wav_out:
    wav_out.setnchannels(nchannels)
    wav_out.setsampwidth(sampwidth)
    wav_out.setframerate(framerate)
    wav_out.writeframes(out_data)

start_trimmed = start_idx // nchannels
end_trimmed = (len(samples) - end_idx) // nchannels
print(f"Trimmed {start_trimmed} frames from start, {end_trimmed} frames from end.")

