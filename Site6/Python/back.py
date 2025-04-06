from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QPushButton, QLineEdit, QMessageBox
import pyautogui as pya
import webbrowser
import pywhatkit as kit


app = QApplication([])

janela = QWidget()
janela.setWindowTitle("Janela de Exemplo")
janela.setGeometry(100, 100, 300, 200)

pergunta = QLineEdit(janela)
pergunta.setGeometry(20, 50, 150, 40)

botao = QPushButton("Clique aqui", janela)
botao.setGeometry(180, 50, 40, 40)

titulo = QLabel("Pesquise algo no Youtube")



def click_mouse():
    entrada = pergunta.text()
    
    try:
        resp = QMessageBox.question(janela, "Pergunta", "Você quer abrir o video?", QMessageBox.Yes | QMessageBox.No)
        
        if resp == QMessageBox.Yes:
            
            kit.playonyt(entrada)
        else:
            QMessageBox.information(janela, "Sem resposta", "Você nao deu resposta valida")
    except Exception as e:
        QMessageBox.information(janela, "Erro", "Deu ruim, poe um link bom")        

botao.clicked.connect(click_mouse)


janela.show()
app.exec_()