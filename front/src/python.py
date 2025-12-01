def celcius():
 firegith= float(input('qual temperutura em fireght'))
 celsiuss =(firegith -32) * 5/9
 print(celsiuss)



def parador ():

 array=[]
 numeros = input('digite um numero')



 while numeros != 'PARAR':
   array.append(numeros)
   maior = 0
   menor = int(array[0])
   if numeros =='PARAR':
     break
   for y in array:
     
     numeral = int(y)
     if numeral >maior:
       maior = numeral
     if numeral < menor:
        menor = numeral
   numeros = input('digite um numero')
 
    
 


 print(maior)
 print(menor)   



def impar():
   soma = 0
   
   for x in range(1,51):
    if x % 2 == 1:
     soma = soma + x
   print(soma)  
impar()

def fatorial (n):
         if n == 1:
           return 1
         else:
            return n * fatorial(n-1)
print(fatorial(5))

def expo (b,e): 
 calculo = b ** e
 return print(f' o calculo é {calculo}')
expo(5,5)


def finanbonicci (n):
    a = 0
    b = 1
    for x in  range(0,n+1):

     numero = a + b      
     a  = b
     b = numero
    

      
     print(numero)

finanbonicci(5)


def palidromo (n):
  d = list(n)
  d.reverse()
  c= "".join(d)
  print(c)
  if c == n:
     print('e um palidromo')
  else:
    print("nao é um")
palidromo('arara')




def somador ():
  aray = [1,2,3,4,5,6,7]
  soma = 0
  for x in range(len(aray)):
   soma = soma + aray[x]
  print(soma)

somador()
def produtos ():
  estoque = []
  comprar = input("qual produto comprar ?")
  repor = input("qual produto repor ?")
  while comprar !="sair":
   if len(estoque) < 0:
     print('estoque nao pode ficar negativo')
  

   if repor =='':
      print("ok nao iremos repor")
   else:
        estoque.append({'nomeProduto':repor})
  

   for x in estoque:
    if comprar == x['nomeProduto']:
      estoque.remove(x)
   else:  
    comprar = input("qual produto comprar ?")
    repor = input("qual produto repor ?")
  for x in estoque: 
   print(x['nomeProduto'])



def validador():
 s = input("senha")
 maius =[]
 minuscu = []
 numero = []


 if len(s) > 8:
  for x in s:
   if x.islower():
     minuscu.append(x)
   if x.isupper():
     maius.append(x)
   if x.isdigit():
     numero.append(x)

 if len(minuscu) > 0 and len(maius) > 0 and len(numero) > 0:
  print('a senha esta requisito')
 else:
   print('senha nao esta no requisito')
 print(s)



def cedulas (x):
     bancoCedulas = []
     banco = 0
     cedulasx = [200,100,50,20,10,5,2] # 200 100 50 20 10
     for y in cedulasx:
      while x >=y:
           banco = banco + y
           bancoCedulas.append(y)
           x -=y
       
     print (banco)
     print(bancoCedulas)

cedulas(543)


def calculo(f):
  calculo = (f - 32) * 5/9
  print(calculo)

calculo(75)

def fatorialzinho (n):
   if n == 1:
     return 1
   else:
      return  n * fatorialzinho(n-1)
    
print(fatorialzinho(5))


def usuario():
   nome = input('digite')
   nota = float(input("nota"))
   alunos = []
   alunos.append({'nome':nome,'nota':nota})
   while nome != 'PARAR': 
     alunos.append({'nome':nome,'nota':nota})
     nome = input("digite  o nome")
     if nome == 'PARAR':
       break
     nota = float(input("nota"))
     somaNota = 0
     quantia = 0 
     media = 0
     for x in alunos:
      somaNota = somaNota + x['nota']
    
      quantia = quantia + 1
     
   nomes = []
   notas = []
   media = somaNota / quantia
   for x in alunos:
     print(f'nome{x['nome']} nota {x['nota']} ')
    
   print(f'media é {media}')

    
usuario()