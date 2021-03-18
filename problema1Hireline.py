import sys

lines = []

for line in sys.stdin:
    lines.append("".join(line.splitlines()))

linea1 = lines[0].split()
instructionLength = [None] * 2
instructionLength[0] = int(linea1[0])
instructionLength[1] = int(linea1[1])
msgLength = int(linea1[2])
instruction = [None] * 2
instruction[0] = list(lines[1])
instruction[1] = list(lines[2])
msg = list(lines[3])

aux = [[None] * 2] * 2
counting = [0] * 2
response = ['NO'] * 2

def decrypt():
    for msgLetter in msg:
        for i in range (2):
            if msgLetter == aux[i][0]:
                if len(aux[i]) == 1:
                    response[i] = 'SI'
                    return
                counting[i] += 1
                if counting[i] > 3:
                    aux[i] = [None] * 2
                    counting[i] = 0
            elif msgLetter == aux[i][1]:
                aux[i].pop(0)
                counting[i] = 0
                if len(aux[i]) == 0:
                    response[i] = 'SI'
                    return
            elif msgLetter == instruction[i][0] and aux[i][0] == None:
                aux[i] = instruction[i].copy()
                counting[i] += 1
            else:
                aux[i] = [None] * 2
                counting[i] = 0

decrypt()

responseStr = response[0] + '\n' + response[1]
file = open('output.txt', 'w')
file.write(responseStr)