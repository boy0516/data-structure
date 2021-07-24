import sys

def stack_push(num):
    stack.append(num)

def stack_top():
    if stack:
        print(stack[-1])
    else:
        print(-1)

def stack_size():
    print(len(stack))

def stack_empty():
    if stack:
        print(0)
    else:
        print(1)

def stack_pop():
    if stack:
        print(stack.pop())
    else:
        print(-1)
    

N = int(sys.stdin.readline())

stack = []    


for i in range(N):
    commend = sys.stdin.readline().split()
    if commend[0]=="push":
        stack_push(int(commend[1]))
    elif commend[0]=="top":
        stack_top()
    elif commend[0]=="size":
        stack_size()
    elif commend[0]=="empty":
        stack_empty()
    elif commend[0]=="pop": 
        stack_pop()



# import sys

# N = int(sys.stdin.readline())

# stack = []


# for i in range(N):
#     commend = sys.stdin.readline().split()
    
#     if commend[0]=="push":
#         stack.append(int(commend[1]))
#     elif commend[0]=="top":
#         if stack:
#             print(stack[-1])
#         else:
#             print(-1)
#     elif commend[0]=="size":
#         print(len(stack))
#     elif commend[0]=="empty":
#         if stack:
#             print(0)
#         else:
#             print(1)
#     elif commend[0]=="pop": 
#         if stack:
#             print(stack.pop())
#         else:
#             print(-1)

    
    