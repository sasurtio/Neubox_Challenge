import sys

lines = []

for line in sys.stdin:
    lines.append("".join(line.splitlines()))

n = int(lines.pop(0))
distance = 0

for i in range(n):
    turn = [int(number) for number in lines.pop(0).split()]
    diff = turn[0] - turn[1]
    if abs(diff) > abs(distance):
        distance = diff

if distance > 0:
    response = '1 ' + str(distance)
else:
    response = '2 ' + str(-distance)

file = open('output.txt', 'w')
file.write(response)