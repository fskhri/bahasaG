def to_language_g(text):
    result = []
    words = text.split()

    for word in words:
        new_word = ''
        for char in word:
            if char.lower() in 'aeiou':
                new_word += char + 'g' + char
            else:
                new_word += char
        result.append(new_word)
    return ' '.join(result)

text = input('Masukkan teks yang ingin diubah ke dalam bahasa "G": ')
translated_text = to_language_g(text)
print(f'Hasil terjemahan: {translated_text}')