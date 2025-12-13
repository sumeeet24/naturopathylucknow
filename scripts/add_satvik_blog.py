import json
import datetime
import os

# Define the file paths
TEXT_FILE_PATH = "/tmp/file_attachments/New/The Satvik.pdf.txt"
BLOG_JSON_PATH = "data/blogs.json"
AUDIO_PATH = "/audio/satvik-diet-case-study.mp3"

# Content preparation
slug = "satvik-diet-pcos-digestive-health-case-study"
title = "The Satvik Diet: A Clinical Case Study & Comprehensive Naturopathic Guide"
author = "Dr. Neelam Kumari & Dr. Nand Lal Yadav"
excerpt = "A detailed clinical case study on reversing PCOS and digestive issues using the Satvik diet. Discover the ancient wisdom of Naturopathy combined with modern nutritional science to heal from within."
tags = ["Satvik Diet", "PCOS Reversal", "Digestive Health", "Naturopathy", "Case Study", "Holistic Nutrition", "Gut Health", "Yoga Diet"]
keywords = ["Satvik Diet for PCOS", "Naturopathy for Digestive Issues", "Satvik Food List", "Dr Neelam Kumari Naturopath", "Dr Nand Lal Yadav Yoga", "Holistic Healing Lucknow", "Gut Health Naturopathy"]

# Read the text file
try:
    with open(TEXT_FILE_PATH, 'r', encoding='utf-8') as f:
        text_content = f.read()
except FileNotFoundError:
    print(f"Error: Could not find file at {TEXT_FILE_PATH}")
    # Fallback to the known content structure if file is missing in a different env,
    # but here we expect it to exist.
    exit(1)

# Helper function to convert text to HTML
def text_to_html(text):
    html_parts = []

    # Add Audio Player at the top
    html_parts.append(f'''
    <div class="mb-8 p-6 bg-nature-light/20 rounded-xl border border-nature-green/30">
        <h3 class="text-xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
            🎧 Listen to the Audio Case Study
        </h3>
        <audio controls class="w-full">
            <source src="{AUDIO_PATH}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <p class="text-sm text-stone-600 mt-2 italic">Listen to a comprehensive overview of the Satvik diet and the patient's journey.</p>
    </div>
    ''')

    # Table of Contents
    html_parts.append('''
    <div class="bg-stone-50 p-6 rounded-lg border border-stone-200 my-8">
        <h2 class="text-2xl font-serif text-nature-green mb-4" id="table-of-contents">Table of Contents</h2>
        <ul class="list-disc pl-5 space-y-2 text-stone-700">
            <li><a href="#introduction" class="hover:text-nature-green transition-colors">Introduction: The Rise of Satvik Diet</a></li>
            <li><a href="#what-is-satvik" class="hover:text-nature-green transition-colors">What is the Satvik Diet?</a></li>
            <li><a href="#case-study" class="hover:text-nature-green transition-colors">Case Study: Resolving PCOS & IBS</a></li>
            <li><a href="#science" class="hover:text-nature-green transition-colors">Scientific Support</a></li>
            <li><a href="#myths" class="hover:text-nature-green transition-colors">Myths Debunked</a></li>
            <li><a href="#comparison" class="hover:text-nature-green transition-colors">Satvik vs. Other Diets</a></li>
            <li><a href="#guide" class="hover:text-nature-green transition-colors">Step-by-Step Guide</a></li>
        </ul>
    </div>
    ''')

    lines = text.split('\n')

    in_list = False
    in_table = False
    table_header_processed = False

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Headers
        if line[0].isdigit() and '. ' in line[:5]:
            # Close any open lists
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            if in_table:
                html_parts.append('</tbody></table></div>')
                in_table = False

            header_text = line.split('. ', 1)[1]
            anchor = header_text.lower().split(':')[0].replace(' ', '-')

            # Map specific sections to anchors for TOC
            if "Introduction" in line: anchor = "introduction"
            elif "What is" in line: anchor = "what-is-satvik"
            elif "Case Study" in line: anchor = "case-study"
            elif "Scientific" in line: anchor = "science"
            elif "Myths" in line: anchor = "myths"
            elif "Differs" in line: anchor = "comparison"
            elif "Step-by-Step" in line: anchor = "guide"

            html_parts.append(f'<h2 id="{anchor}" class="text-3xl font-serif font-bold text-stone-800 mt-12 mb-6">{header_text}</h2>')

        elif line.startswith('9.') or line.startswith('2.'): # Subheaders like 9.1
             if in_list:
                html_parts.append('</ul>')
                in_list = False
             html_parts.append(f'<h3 class="text-xl font-bold text-stone-700 mt-6 mb-3">{line}</h3>')

        # Bullet points
        elif line.startswith('* '):
            if not in_list:
                html_parts.append('<ul class="list-disc pl-5 space-y-2 text-stone-700 mb-4">')
                in_list = True

            content = line[2:]
            # Bold keys like "Patient:", "Diagnosis:"
            if ':' in content:
                key, val = content.split(':', 1)
                content = f'<strong>{key}:</strong>{val}'

            html_parts.append(f'<li>{content}</li>')

        # Tables (Markdown style in text)
        elif line.startswith('|'):
            if not in_table:
                html_parts.append('<div class="overflow-x-auto my-8"><table class="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">')
                in_table = True
                table_header_processed = False

            # Process row
            cells = [c.strip() for c in line.split('|') if c.strip()]

            if not table_header_processed:
                html_parts.append('<thead class="bg-nature-green text-white"><tr>')
                for cell in cells:
                    html_parts.append(f'<th class="p-4 border-b">{cell}</th>')
                html_parts.append('</tr></thead><tbody class="text-stone-700">')
                table_header_processed = True
            elif '---' in line:
                continue # Skip separator line
            else:
                html_parts.append('<tr class="border-b hover:bg-stone-50">')
                for cell in cells:
                    html_parts.append(f'<td class="p-4">{cell}</td>')
                html_parts.append('</tr>')

        else:
            # Regular paragraph
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            if in_table:
                html_parts.append('</tbody></table></div>')
                in_table = False

            # Internal linking logic (simple replacement)
            line = line.replace('Naturopathy', '<a href="/" class="text-nature-green hover:underline">Naturopathy</a>')
            line = line.replace('Yoga', '<a href="/yoga-meditation-lucknow" class="text-nature-green hover:underline">Yoga</a>')
            line = line.replace('Acupressure', '<a href="/acupressure-acupuncture-lucknow" class="text-nature-green hover:underline">Acupressure</a>')

            html_parts.append(f'<p class="mb-4 text-stone-700 leading-relaxed">{line}</p>')

    if in_list: html_parts.append('</ul>')
    if in_table: html_parts.append('</tbody></table></div>')

    # Add Author Bios at the bottom
    html_parts.append('''
    <div class="mt-12 pt-8 border-t border-stone-200">
        <h3 class="text-2xl font-serif font-bold text-stone-800 mb-6">Meet the Experts</h3>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-stone-50 p-4 rounded-xl text-center">
                 <div class="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400" alt="Dr. Ravi Gupta" class="w-full h-full object-cover">
                 </div>
                 <h4 class="font-bold text-stone-900">Dr. Ravi Gupta</h4>
                 <p class="text-xs text-stone-600 mb-2">Senior Naturopath</p>
                 <a href="/contact" class="text-xs text-nature-green font-bold uppercase tracking-wide">Book Consultation</a>
            </div>
            <div class="bg-stone-50 p-4 rounded-xl text-center">
                 <div class="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 overflow-hidden">
                     <!-- Placeholder or actual image if available -->
                     <div class="w-full h-full bg-nature-green/20 flex items-center justify-center text-2xl">👩‍⚕️</div>
                 </div>
                 <h4 class="font-bold text-stone-900">Dr. Nilima Kumari</h4>
                 <p class="text-xs text-stone-600 mb-2">Naturopathy Therapist</p>
                 <a href="/naturopathy-therapist/nilima-kumari" class="text-xs text-nature-green font-bold uppercase tracking-wide">View Profile</a>
            </div>
            <div class="bg-stone-50 p-4 rounded-xl text-center">
                 <div class="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 overflow-hidden">
                     <!-- Placeholder or actual image if available -->
                     <div class="w-full h-full bg-nature-green/20 flex items-center justify-center text-2xl">🧘‍♂️</div>
                 </div>
                 <h4 class="font-bold text-stone-900">Dr. Nand Lal Yadav</h4>
                 <p class="text-xs text-stone-600 mb-2">Yoga Therapist</p>
                 <a href="/yoga-therapist/nand-lal-yadav" class="text-xs text-nature-green font-bold uppercase tracking-wide">View Profile</a>
            </div>
        </div>
    </div>
    ''')

    return "\n".join(html_parts)

# Generate HTML
html_content = text_to_html(text_content)

# Construct new blog entry
new_blog = {
    "slug": slug,
    "title": title,
    "excerpt": excerpt,
    "content": html_content,
    "date": datetime.datetime.now().isoformat(),
    "author": author,
    "tags": tags,
    "keywords": keywords
}

# Read existing blogs
try:
    with open(BLOG_JSON_PATH, 'r') as f:
        blogs = json.load(f)
except Exception as e:
    print(f"Error reading blogs.json: {e}")
    blogs = []

# Append (or replace if exists for testing)
# Check if slug exists
existing_index = next((index for (index, d) in enumerate(blogs) if d["slug"] == slug), None)
if existing_index is not None:
    blogs[existing_index] = new_blog
    print(f"Updated existing blog: {slug}")
else:
    blogs.insert(0, new_blog) # Insert at top
    print(f"Added new blog: {slug}")

# Write back
with open(BLOG_JSON_PATH, 'w') as f:
    json.dump(blogs, f, indent=2)

print("Success: Blog post added.")
