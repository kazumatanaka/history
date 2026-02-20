import csv
import json

def get_broad_era(era_name, year):
    # Mapping based on typical divisions and previous data
    if era_name in ["弥生時代", "古墳時代", "飛鳥時代", "奈良時代", "平安時代"]:
        return "古代"
    elif era_name in ["鎌倉時代", "南北朝時代", "室町時代"]:
        return "中世"
    elif era_name in ["安土桃山時代", "江戸時代"]:
        return "近世"
    elif era_name in ["明治時代", "大正時代"]:
        return "近代"
    elif era_name == "昭和時代":
        if int(year) < 1945:
            return "近代"
        else:
            return "現代"
    elif era_name == "平成時代" or era_name == "令和時代":
        return "現代"
    return "古代" # fallback

def convert():
    data = []
    with open('jidai.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                stars = row['重要度'].count('★')
                year = row['年'].strip()
                era_name = row['時代名'].strip()
                if not era_name:
                    continue
                
                broad_era = get_broad_era(era_name, year)
                
                hint = row['ゴロ暗記'].strip()
                if hint == '#N/A' or hint == '':
                    hint = '（ゴロなし）'
                    
                data.append({
                    'id': f"q{int(row['番号']):03d}",
                    'y': row['年'].strip(),
                    'e': row['出来事'].strip(),
                    'h': hint,
                    'era': broad_era,
                    'stars': stars,
                    'd': stars
                })
            except Exception as e:
                print(f"Error parsing row: {row}, error: {e}")

    js_content = f"const masterData = {json.dumps(data, ensure_ascii=False, indent=4)};\n"
    
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully converted {len(data)} questions.")

if __name__ == '__main__':
    convert()
