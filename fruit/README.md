# fruit/: data for the detect-then-judge example (Pattern Detector brief C)

- `detector/`: MediaPipe's EfficientDet-Lite0 (float16) object detector and `labelmap.txt` (COCO's 80 things),
  from storage.googleapis.com/mediapipe-models (Apache 2.0).
- `bananaid/`: **BananaID** ripeness photos (Mendeley Data, doi 10.17632/h6n5srjjyw, CC BY 4.0): the original,
  not augmented, ripeness set as published (`bananaid-meta.json` is the dataset record).
- `coco/`: photos from COCO val2017 (cocodataset.org) that contain bananas, apples or oranges, plus some food
  photos without them, kept only where the photo's own licence is CC BY, CC BY-SA, no known copyright or a US
  government work. `photos.csv` lists each photo's licence, Flickr page and COCO's fruit boxes. Credit each
  photo by its Flickr page if it is ever shown.
