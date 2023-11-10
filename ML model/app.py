from flask import Flask, request, jsonify
from transformers import pipeline
import base64

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the base64-encoded image from the request
        data = request.get_json()
        base64_encoded_image = data['image']

        #image_data = base64.b64decode(base64_encoded_image)
        # Use the image-to-text pipeline with the decoded image
        image_to_text = pipeline("image-to-text", model="salesforce/blip-image-captioning-base")
        results = image_to_text(base64_encoded_image)
        text = results[0]["generated_text"]
        listText = text.split()

        # Define your mapping
        types = {
            "vegetables": "Wet Waste",
            "Metal": "recyclable",
            "plastic": "recyclable"
        }

        # Process the text and map to types
        output = {}
        for item in listText:
            if item in types:
                output[item] = types[item]

        return jsonify(output)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
