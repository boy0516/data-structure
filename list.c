#include<stdio.h>
int main(){
    char c = 'A';
    char*pc = &c;
    printf("%c %p\n",c,pc);
    return 0;
}