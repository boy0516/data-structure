N,M = map(int, input().split())

list_N = list(map(int,input().split()))

def sum(N, M, list_N):
    count = 0
    for j in range(N):
        temp = 0
        for i in list_N[j:N]:
            temp += i
            
            if temp == M:
                count += 1
                break
            elif temp > M:
                break
            
        if temp < M:
            break
    
    return count

print(sum(N, M, list_N))