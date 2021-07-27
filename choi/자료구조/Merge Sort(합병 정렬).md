## Merge Sort(합병 정렬)

divide and conquer(분할 정복 알고리즘) 알고리즘



두 서브어레이가 이미 소팅되어있다면 소팅순서를 해치지 않고 merge하는 것이 가능하다. 



예시 코드

```c++
template<typename Type>
void Merge(Type *_arrayA, Type *_arrayB, int _nA, int _nB, Type *_arrayOut)
{
    int posA = 0, posB = 0, k = 0;
    while(posA < _nA && posB < _nB)
    {
        if(_array[posA]<_arrayB[posB])
        {
			_arrayOut[k] = _array[posA];
            posA++;
        }
        else
        {
            _arrayOut[k] = _arrayA[posA];
            posB++;
        }
        k++;
    }
    for(; posA < _nA; posA++)
    {
        _arrayOut[k] = _arrayA[posA];
        k++;
    }
    for(; posB < _nB; posB++)
    {
        _arrayOut[k] = _arrayB[posB];
        k++;
    }
}
```

