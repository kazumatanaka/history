from PIL import Image, ImageDraw

def process_transparent(img_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        
        # floodfill from top-left corner
        ImageDraw.floodfill(img, (0, 0), (255, 255, 255, 0), thresh=40)
        
        # also top-right
        w, h = img.size
        ImageDraw.floodfill(img, (w-1, 0), (255, 255, 255, 0), thresh=40)
        
        img.save(img_path)
        print("Successfully made background transparent.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_transparent('/Users/kazumatanaka/Desktop/history/assets/images/enemy_samurai_pop.png')
