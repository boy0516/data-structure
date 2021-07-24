import sys

#입력예시
#4 4 
#----
#----
#----
#----

N, M = map(int,sys.stdin.readline().split()) # 가로 세로 입력

boards=[]

# 각 라인별로 2차원 리스트로 받아줍니다.
for i in range(N):
    board_list = sys.stdin.readline()
    boards.append(board_list)
# boards는 [[-,-,-,-,],[-,-,-,-,],[-,-,-,-,],[-,-,-,-,]] 이렇게 2차원 리스트로

row_count = 0
cal_count = 0

for board in boards: # 다음 리스트를 가져오는 반복문
    row_connect = False
    for i in board: # 리스트 안의 판자 꺼내오는 반복문
        if i == '-' and not row_connect:
            row_count+=1
            row_connect=True
        elif i =='|' and row_connect:
            row_connect=False
    
for j in range(M):
    cal_connect = False
    for i in range(N):
        if boards[i][j] == '|' and not cal_connect:
            cal_count +=1
            cal_connect =True
        elif boards[i][j] =='-' and cal_connect:
            cal_connect = False

# [[-,-,-,-,],
#  [-,-,-,-,],
#  [-,-,-,-,],
#  [-,-,-,-,]]



print(row_count+cal_count)

