n = int(input())
distance = 0

for i in range(n):
    turn = [int(number) for number in input().split()]
    diff = turn[0] - turn[1]
    if abs(diff) > abs(distance):
        distance = diff

if distance > 0:
    print(1, distance)
else:
    print(2, -distance)