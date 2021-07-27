## Insertion Sort (삽입정렬)

 예시코드

```c++
templat <typename Type>

void Insertion_Sort(Type * _array, int _n)
{
    for(int i=1;i<_n;i++)
    {
        for(int j=i;j>0;j--)
        {
            if( _array[j-1]>_array[j])
            {
                std::swap(_array[j-1],_array[j]);
            }
            else
            {
                break;
            }
        }
    }
}
```



스왑을 해나가며 정렬을 하는 방식인데 

스왑을 하기 위해서 일반적으로 temp = a, a=b, b=temp 이런식으로 세줄짜리 코드를 많이 쓰잖아요.

따라서 스왑을 하는게 실은 굉장히 시간이 오래 걸리는 작업이기 때문에 최적화한다는 관점에서 

1. tmp에 삽입하고자 하는 값을 임시로 저장
2. 더 작은 값이 나올때까지 다른 요소들을 오른쪽으로 쉬프트
3. 작은 값이 등장하면 쉬프팅을 멈추고 빈자리에 tmp값을 삽입



asymptotic analysis측면에서는 복잡도가 같지만 실제 구현 측면에서는 더 속도가 빠른 알고리즘이다.



스왑 없이 구현한 의사코드(pseudo-code)

```c++
for j = 2 to A.length
    key = A[j]
    // Insert A[j] into the sorted sequence A[1..j-1].
    i = j -1
    while i>0 and A[i] > key
        A[i+1] = A[i]
        i = i-1
    A[i + 1] = key
```



스왑없이 tmp variable을 이용한 삽입정렬

```c++
template <typename Type>
void Insertion_Sort_without_Swqp( Type *_array, int _n)
{
    for(int i=1;i<_n;i++)
    {
        Type tmp = _array[i];
        for(int j=i;j>0;j--)
        {
            if(_array[j-1]>tmp)
            {
                _array[j] = _array[j-1];
            }
            else
            {
                _array[j] = tmp;
                break;
            }
        }
        if(_array[0]>tmp)
        {
            _array[0] = tmp;
        }
    }
}
```

