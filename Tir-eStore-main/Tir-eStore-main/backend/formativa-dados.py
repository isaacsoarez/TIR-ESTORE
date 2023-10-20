from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

# Configurando o driver Chrome
servico = Service(ChromeDriverManager().install())
navegador = webdriver.Chrome(service=servico)

# Navegando para o site
navegador.get("https://henriquedouradoo.github.io/Tir-eStore/templates/front-end/dashboard.html")

# Aguardando 1 segundo
navegador.implicitly_wait(1)

# Obtendo conteúdo por diferentes métodos e armazenanado variáveis
dados1 = navegador.find_element(By.ID, "sidebar").text
dados2 = navegador.find_element(By.CLASS_NAME, "main-container").text
dados3 = navegador.find_element(By.TAG_NAME, "p").text
dados4 = navegador.find_elements(By.CSS_SELECTOR, ".card")[2].text
dados5 = navegador.find_elements(By.ID, "bar-chart")[0].text

# Imprimindo os resultados
print("Conteúdo por ID:")
print(dados1)
print("--------////-----------////-----")

print("--------////-----------////-----")
print("Conteúdo por CLASS:")
print(dados2)
print("--------////-----------////-----")

print("--------////-----------////-----")
print("Conteúdo por TAG NAME:")
print(dados3)
print("--------////-----------////-----")

print("--------////-----------////-----")
print("Conteúdo por CSS SELECTOR:")
print(dados4)
print("--------////-----------////-----")

print("--------////-----------////-----")
print("Conteúdo por ID:")
print(dados5)
print("--------////-----------////-----")

# Fechando o navegador
navegador.quit()
