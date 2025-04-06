import speech_recognition as sr
import pyttsx3 as pty

recon = sr.Recognizer()
fala = pty.init()




print("Pao")


def falar(texto):
    fala.say(texto)
    fala.runAndWait()

def ouvir():
    with sr.Microphone(device_index=3) as source:

        recon.adjust_for_ambient_noise(source, duration=1)

        print("Diga algo para saber se estou te ouvindo")
        falar("Diga algo para saber se estou te ouvindo")
        audio = recon.listen(source)

        try:
            texto = recon.recognize_google(audio, language="pt-BR")
            print("Voce disse: " + texto)
            
            dnv = input("Quer tentar de novo? \n(s/n) \nQualquer coisa diferente de 's' ira desligar a IA")
            if dnv =='s':
                ouvir()
            else:
                print("Desligando a IA")
                falar("Desligando a IA")
        except sr.UnknownValueError:
            print("Nao consegui te ouvir ou entender")


ouvir()