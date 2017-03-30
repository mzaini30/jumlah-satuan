print """Cara penggunaan:

Masukkan angka: 525525255252
45
"""

while True:
    hasil = 0
    hitung = raw_input("Masukkan angka: ")
    hitung = list(hitung)
    for x in hitung:
        hasil += int(x)
    print hasil