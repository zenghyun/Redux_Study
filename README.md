# Redux_Study

## Redux 
Redux는 자스크립트 앱을 위한 예측 가능한 상태 컨테이너 입니다.

Redux는 일관적으로 동작하고, 서로 다른 환경(서버, 클라이언트, 네이티브)에서 작동하고, 테스트하기 쉬운 앱을 작성하도록 도와줍니다. 

또한 Redux는 React나 다른 뷰 라이브러리와 함께 사용할 수 있습니다. Redux는 매우 작지만(의존 라이브러리 포함 2KB), 사용 가능한 애드온은 매우 많습니다.

### "Redux"란 무엇인가요?
우선 "Redux가 무엇인가?"를 질문해야 합니다.

Redux는 실제로 다음과 같습니다:

- "전역" 상태를 포함하는 단일 스토어
- 앱에 어떤 일이 일어날 때 스토어에 일반 객체 액션을 디스패치하는 것
- 액션을 살펴보고 불변성을 유지한 채 업데이트된 상태를 반환하는 순수 리듀서 함수
  
필수는 아니지만, Redux 코드에는 보통 아래 항목들이 포함됩니다.:

- 액션 객체를 생성하는 액션 생성자
- 부수 효과를 가능하게 하는 미들웨어
- 부수 효과를 가진 동기 또는 비동기 로직을 포함하는 Thunk 함수
- ID로 항목 조회를 가능하게 하는 정규화된 상태
- Reselect 라이브러리를 사용하여 파생된 데이터를 최적화하는 메모이제이션된 셀렉터 함수
- 액션의 이력과 상태 변경을 확인할 수 있는 Redux DevTools 확장 프로그램
- 액션, 상태 및 기타 함수에 대한 TypeScript 타입

추가적으로, Redux는 보통 React-Redux 라이브러리와 함께 사용되어 React 컴포넌트가 Redux 스토어와 상호 작용할 수 있게 합니다.


### React Redux 앱 만들기 (Yarn 기반 vite 기반)
```
yarn create vite 이름 --template --react-ts
```
<br>

### Redux 패키지 설치
Redux 패키지 설치 NPM에서 패키지로 받아 모듈 번들러나 Node 앱에서 사용 가능합니다.
```
# NPM

npm install redux react-redux @types/react-redux @reduxjs/toolkit

# Yarn

yarn add redux react-redux @types/react-redux @reduxjs/toolkit

```

<br>

### Redux는 언제 사용해야 할까? 
Redux는 상태를 관리하기에 좋은 도구이지만 여러분의 상황에 적당한지는 따져 보아야 합니다. 단지 누군가가 사용하라고 했다는 이유만으로 Redux를 사용하지는 마세요 - 시간을 들여서 잠재적인 이점과 그에 따르는 단점을 이해하세요.

Redux를 사용하기 적절한 때를 알기 위한 몇 가지 제안이 있습니다:

- 계속해서 바뀌는 상당한 양의 데이터가 있다
- 상태를 위한 단 하나의 근원이 필요하다
- 최상위 컴포넌트가 모든 상태를 가지고 있는 것은 더 이상 적절하지 않다

<br>

### Redux Toolkit은 무엇인가? 
Redux Toolkit (줄여서 "RTK")은 Redux 로직을 작성하기 위해 저희가 공식적으로 추천하는 방법입니다. @reduxjs/toolkit 패키지는 코어 redux 패키지를 포함하며, Redux 앱을 만드는 데 필수적인 API 메서드와 공통 의존성을 포함합니다. Redux Tookit은 저희가 제안하는 모범 사례를 통해 만들어졌으며, 대부분의 Redux 작업을 단순화하고, 흔한 실수를 방지하며, Redux 애플리케이션을 더 쉽게 작성할 수 있도록 지원합니다.

현재 Redux 로직을 작성하고 있다면 Redux Toolkit을 사용하여 코드를 작성하세요!

RTK는 일반적인 작업들을 단순화해주는 유틸리티가 포함되어 있습니다. 예를 들면, 스토어 설정, 리듀서 생성과 불변 수정 로직 작성, 와 한번에 모든 상태 슬라이스 작성 이 있습니다.

Redux를 처음 사용하는 입문자든, 기존 애플리케이션을 간소화하고자 하는 경험자든, Redux Toolkit 은 여러분의 Redux 코드를 개선할 수 있도록 도와줍니다.

### Redux Toolkit
Redux Toolkit은 Redux 로직을 작성하기 위해 저희가 공식적으로 추천하는 방법입니다. RTK는 Redux 앱을 만들기에 필수적으로 여기는 패키지와 함수들을 포함합니다. 대부분의 Redux 작업을 단순화하고, 흔한 실수를 방지하며, Redux 앱을 만들기 쉽게 해주는 모범 사례를 통해 만들어졌습니다.

RTK는 저장소 준비, 리듀서 생산과 불변 수정 로직 작성, 상태 "조각" 전부를 한번에 작성 등 일반적인 작업들을 단순화해주는 유틸리티를 포함하고 있습니다.

여러분이 첫 프로젝트에 Redux를 새로 도입하는 입문자든 기존 앱을 단순화하고 싶은 경험자든 상관 없이, Redux Toolkit은 더 나은 Redux 코드를 만들게 도와줍니다.

Redux Toolkit은 NPM에서 패키지로 받아 모듈 번들러나 Node 앱에서 사용 가능합니다.

```
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```
<br>

