export class CreateUserDto {
    firstName : string;
    lastName  : string;
    isActive  : boolean;
}

//DTO는 어떻게 데이터가 보내지게 될 지 정의하는 객체이다.

//Nest에서는 이 객체를 클래스로 정의할 것을 추천한다. 
//이유는 클래스는 ECMA의 표준에 속하고, 컴파일된 JS에서도 실제 entities로서 다룰 수 있게 된다