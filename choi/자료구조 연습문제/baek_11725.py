import sys

N = int(sys.stdin.readline()) 

visits=[False]*N
visits[0]=True
parents = [0]*N
parents[0]=1

nodes=[[] for _ in range(N)]

for i in range(N-1):
    num1, num2 = map(int,sys.stdin.readline().split())
    nodes[num1-1].append(num2)
    nodes[num2-1].append(num1)

s=[1]

while s:
    
    i = s.pop()
    for j in nodes[i-1]:
        if not visits[j-1]: 
            visits[j-1]=True 
            parents[j-1]=i 
            s.append(j)

for i in parents[1:]:
    print(i)


#######################################################################################

import sys

# 예시 입력
# 7
# 1 6
# 6 3
# 3 5
# 4 1
# 2 4
# 4 7

N = int(sys.stdin.readline()) # 7 입력
# 입력을 받아옵니다. 

visits=[False]*N
visits[0]=True
# 방문한 노드를 표시하기 위한 리스트로 방문을 하면 값을 True로 바꿔줍니다.
parents = [0]*N
# 각 노드들의 부모노드를 표시하기 위한 리스트입니다. 
parents[0]=1
# 1번노드는 루트이므로 미리 1을 입력해둡니다.


nodes=[[] for _ in range(N)]
# 노드의 연결 노드를 입력하기위한 2차원 리스트를 만들어줍니다.

## 반복문을 통해 노드에 연결되어있는 다른 노드들의 정보를 입력해줍니다. 
for i in range(N-1):
    num1, num2 = map(int,sys.stdin.readline().split())
    nodes[num1-1].append(num2)
    nodes[num2-1].append(num1)
# 1 6
# 6 3
# 3 5
# 4 1
# 2 4
# 4 7
#입력을 받아주면 nodes는   [[6, 4][4][6, 5][1, 7][3][1, 3][4]]    이 됩니다.


# DFS를 이용하기위한 스택으로 쓸 리스트를 만들어줍니다.
s=[1]
# 1이 입력되어있는데 이는 탐색을 시작하는 노드를 표시해줍니다.

# 스택이 존재하는 동안 반복되는 while문 입니다.
while s:
    # 변수 i 에 스택의 값을 빼서 넣어줍니다.
    i = s.pop()
    # 반복문은 시작 노드에 연결되어있는 노드들을 변수 j를 통해 순차적으로 가져옵니다. 
    for j in nodes[i-1]:
        # 처음에는 i가 1이니까 for j in nodes[0]로 j에는 [6,4]의 값이 순차적으로 6, 4가 들어갑니다.

        # 조건문을 통해서 현재 검사하고있는 노드가 방문된적 있는지 확인합니다.

        if not visits[j-1]: # 6번 노드가 이전에 방문된적 있는지 확인

            visits[j-1]=True # 6번노드에 방문했었다고 True로 바꿔줍니다.
            # 부모노드 
            parents[j-1]=i #i는 1이니까 6번노드의 부모노드는 1번 노드라고 parents 리스트에 저장해줍니다
            
            #스택에 6을 입력해줍니다.
            s.append(j)


# 모든 과정을 마치고 parents를 출력
for i in parents[1:]:
    print(i)
    






# import sys
# sys.setrecursionlimit(10**9)
# N = int(sys.stdin.readline())


# visits=[False]*N
# visits[0]=True
# parents = [0]*N
# parents[0]=1

# edges=[]

# for i in range(N-1):
#     num1, num2 = map(int,sys.stdin.readline().split())
#     edges.append([num1, num2])

# for edge in edges:
    
#     if visits[edge[0]-1]:
#         parents[edge[1]-1]=edge[0]
#         visits[edge[1]-1]=True
        
#     else:
#         parents[edge[0]-1]=edge[1]
#         visits[edge[0]-1]=True
        
    
            
# for i in parents[1:]:
#     print(i)      
            
        
            

# import sys

# N = int(sys.stdin.readline())

# edges=[]
# visits=[False]*N
# visits[0]=True
# parents = [0]*N
# parents[0]=1

# for i in range(N-1):
#     num1, num2 = map(int,sys.stdin.readline().split())
#     edges.append([num1, num2])


# for edge in edges:
#     parent = 0
#     decendent = 0
#     for i in edge:
#         if visits[i-1] and (parent==0 and decendent==0) :
#             parent = i
#         elif parent!=0:
#             parents[i-1]=parent
#             parent=0
#             visits[i-1]=True
            
#         elif decendent!=0:
#             parents[decendent-1]=i
#             visits[decendent-1]=True
            
#         else:
#             decendent = i
            

# for i in parents[1:]:
#     print(i)      
                