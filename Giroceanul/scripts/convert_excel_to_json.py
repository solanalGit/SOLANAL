import os
import pandas as pd


# Constructing the correct relative path from the script folder to the data folder
input_file = os.path.join('..', 'data', 'streets.xlsx')

# Define the output file path where you want to save the JSON
output_file = os.path.join('..', 'data', 'streets.json')

# Load Excel file
df = pd.read_excel(input_file)

# Convert to JSON
df.to_json(output_file, orient="records", indent=4)

print(f"✅ JSON file saved to {output_file}")
