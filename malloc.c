#include<stdio.h>
#include<stdlib.h>
int *allocateUsingMalloc(int n);
int *allocateUsingCalloc(int n);
int *resizeArray(int *arr,int newSize);
void readElements(int *arr,int start,int end);
void printElements(int *arr,int n);
void freeMemory(int *arr);

int main(){
    int n,new_n;
    int *mallocArray;
    int *callocArray;
    int *resizedArray;
    scanf("%d",&n);
    if(n<=0){
        printf("Invalid size\n");
        return 1;
    }
    mallocArray=allocateUsingMalloc(n);
    if(mallocArray==NULL){
        return 1;
    }
    readElements(mallocArray,0,n);
    callocArray=allocateUsingCalloc(n);
    if(callocArray==NULL){
        freeMemory(mallocArray);
        return 1;
    }
    readElements(callocArray,0,n);
    printArray(callocArray,n);
    scanf("%d",&new_n);
    if(new_n<=0){
        freeMemory(mallocArray);
        freeMemory(callocArray);
        return 1;
    }
    resizedArray=resizeArray(mallocArray,new_n);
    if(resizedArray==NULL){
        freeMemory(mallocArray);
        freeMemory(callocArray);
        return 1;
    }
    mallocArray=resizedArray;
    if(new_n>n){
        readElements(mallocArray,n,new_n);
    }
    printElements(mallocArray,n,new_n);
    freeMemory(mallocArray);
    freeMemory(callocArray);
    return 0;
}
int *allocateUsingMalloc(int n){
    return malloc(n*sizeof(int ));
}
int *allocateUsingCalloc(int n){
    return calloc(n,sizeof(int));
}
int resizeArray(int *arr,int newSize){
    return realloc(arr,newSize*sizeof(int));
}
void readElements(int *arr,int start,int end){
    for(int i=start;i<end;i++){
        scanf("%d",arr+i);
    }
}
void printArray(int *arr,int n){
    printf(".*");
    for(int i=0;i<n;i++){
        printf("%d ",*(arr+i));
        if(i<n-1){
            printf(" ");
        }
    }
}
void freeMemory(int arr){
    free(arr);
}
