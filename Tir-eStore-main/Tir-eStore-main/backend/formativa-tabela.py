from selenium import webdriver
import pandas as pd

driver = webdriver.Chrome()

url = 'https://henriquedouradoo.github.io/Tir-eStore/templates/front-end/analytics.html'

driver.get(url)

driver.implicitly_wait(10)

tables = driver.find_elements('tag name', 'table')

for i, table in enumerate(tables):
    table_html = table.get_attribute('outerHTML')
    df = pd.read_html(table_html)
    
    if df:
        print(f'Informações da Tabela {i + 1}:\n')
        for df_item in df:
            print(df_item)
        print('\n')
    else:
        print(f'Nenhuma tabela encontrada na tabela {i + 1}\n')

driver.quit()

from selenium import webdriver
import pandas as pd

driver = webdriver.Chrome()

url = 'https://henriquedouradoo.github.io/Tir-eStore/templates/front-end/dashboard.html'

driver.get(url)

driver.implicitly_wait(10)

tables = driver.find_elements('tag name', 'table')

for i, table in enumerate(tables):
    table_html = table.get_attribute('outerHTML')
    df = pd.read_html(table_html)
    
    if df:
        print(f'Informações da Tabela {i + 2}:\n')
        for df_item in df:
            print(df_item)
        print('\n')
    else:
        print(f'Nenhuma tabela encontrada na tabela {i + 1}\n')

driver.quit()
