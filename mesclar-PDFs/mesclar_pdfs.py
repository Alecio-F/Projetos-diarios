import PyPDF2
import os

merger = PyPDF2.PdfFileMerger(strict=False)
lista_arquivos = os.listdir("pdfs")

for arquivo in lista_arquivos:
    if ".pdf" in arquivo:
        merger.append(f"pdfs/{arquivo}")

merger.write("PDF_Final.pdf")