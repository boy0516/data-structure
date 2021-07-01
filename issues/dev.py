def solution(progresses, speeds):
    days = []
    answer = []
    per = cnt = 0
    for idx in range(len(progresses)):
        days.append(int((100-progresses[idx])/speeds[idx]))
    days.reverse()
    # for com1 in range(len(days)):
    #     cnt=1
    #     for com2 in range(1,len(days)):
    #         if days[com1]<days[com2]:
    #             answer.append(cnt)
    #             days.pop(days(com1))
    #         else:
    #             cnt+=1

    while len(days) > 0:
        cnt=0
        cnt += 1
        if days[per+1] != len(days):
            if days[per+1] > days[per]:
                answer.append(cnt)
            days.pop(days.index(days[per+1]))
    # - 리스트의 0부터 차례대로 돈다
    #     - 인덱스의 다음 값이 돌고 있는 인덱스보다 크면
    #     인덱스의 값 +1 을 정답 리스트에 저장하고 인덱스를 리스트에서 뺸다.

    # for com1 in range(len(days)):
    #     cnt=1
    #     for com2 in range(com1+1,len(days)):
    #         if com1+1!=len(days):
    #             if days[com1]>=days[com2]:
    #                 cnt+=1
    #             else:
    #                 answer.append(cnt)
    #                 break

    return answer.reverse()


print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
