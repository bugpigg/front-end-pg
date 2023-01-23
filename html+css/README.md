## 코딩애플의 HTML/CSS All-in-one 들으면 간략 정리


<details>
<summary> 기초모듈 - 2023.01.21</summary>

- `<p></p>` paragraph 태그
- `<a></a>` anchor 태그
- `<li></li>` list item 태그
- `<ul></ul>` unordered list 태그
- `<ol></ol>` ordered list 태그
- `<span></span>` 그냥 감싸고 싶을때 쓰는 태그
- 이미지 가운데 정렬하기
    ```css
    display: block;
    margin-left: auto;
    margin-right: auto;
    ```
- 사이즈 단위
    - px
    - vw 현재 브라우저창의 너비
    - % 부모 태그의 비례

- 폰트 관련 파라미터 
    - font-size
    - font-family
    - letter-spacing

- css(Cascading Style Sheet) 파일
    ```html
     <link href="css파일경로" rel="stylesheet">
    ```
    ```css
    <!-- class -->
    .profile {
        ...
    } 
    <!-- 모든 p 태그의 스타일 지정 -->
    p {
        text-align: center;
    }
    <!-- id -->
    #speical {
        text-align: left;
    }
    ```
    - class vs id
        - class 를 주로 사용함
        - 위의 아이들을 selector라고 부름
        - 우선순위가 존재
            - style로 직접 명시 > id > class > tag 순임

- `<div></div>`로 네모 박스 만들기
    - margin 상하좌우 여백
    - padding 상하좌우 안쪽 여백
    - border 테두리
    - border-radius 테두리 둥글게
    - 기본적으로 `display: block` 가지고 있음
        - 가로행을 전부 차지해주셈
        - p,h tag 도 가지고 있음

- 일부 스타일은 자동으로 부모의 속성을 자식에게 inherit 됨
    - font-size, font-family, color

- layout
    - 전체를 감싸는 container 박스 만들어두면 유용함
    - `width: 80%`는 부모 전체 넓이의 80 퍼센트라는 의미
    - div는 float를 통해 정렬 가능
        - 가로로 배치 하는 방법 중 하나임
        - 얘는 붕 떠있는 존재임
        - 그래서 float이지만 다음에 오는 요소에게 영향을 줌
        - `clear: both;`를 사용하여 해결
    - `display: inline-block;`
        - 가로로 배치하는 또 다른 방법
        - 내 크기 만큼 차지하게 해주세요 라는 의미임
        - 근데 이거는 박스사이 공백제거하고 붙여서 써줘야 함...
            - 그래서 박스사이에 주석을 넣거나
            - font-size를 0으로 설정할 수 있음
        - 그리고 박스 안에 글자 쓰면 깨짐
            - `vertical-align: top` 을 통해 해결 가능
                - 위 속성은 inline 속성을 가지는 요소에만 적용 가능
                - 발생하는 이유는 inline-block요소는 옆에 baseline이 존재하면 위로 이동하려는 습성? 이 있음..

- float 관련 문제
    - 바로 위의 요소가 float인 경우, 새로 만드는 요소에 margin이 제대로 적용되지 않을 수 있음
    - 그 경우에는 
        - 1. margin을 많이 주거나
        - 2. 빈 div 만들어서 거기다가 `clear: both`을 주고, 다음 줄에 새로운 요소 입력하자
    - 그래서 float요소 준 다음에는 `clear: both`를 넣은 가상의 박스를 추가해 주자.

- `<nav>`태그는 div 태그랑 동일하지만 네비게이션 바라는 의미를 줌
    - `<section>`, `<footer>` 태그도 있음, 이것도 div와 동일

- 설렉터 문법
    - 공백은 `~안에 있는` 이라는 뜻
        - `.navbar li {...}` navbar 클래스의 모든 자식
    - `>`는 `~안에 있는 직계자식` 이라는 뜻
    - 위의 문법을 자주 사용하는 것 보다는 코드의 의도가 바로 파악되는게 읽기 좋음

- a태그 관련
    - 밑줄 없애기 `text-decoration: none;`

- 백그라운드 이미지 
    ```
    <!-- div 에 그림 꽉 채우기, contain도 있는데 이거는 안 짤리게 함 -->
    background-size : cover; 
    background-repeat : no-repeat;
    <!-- 어디서 부터 배경을 채우는가 -->
    background-position : center;
    <!-- 스크롤시 배경 고정 -->
    background-attachment : fixed;
    <!-- 보정도 가능하다 -->
    filter: brightness() ;
    ```
    - 배경 2개 겹치기 가능
        - 콤마로 이미지 2개 첨부하면 댐
    - margin collapse 현상
        - 네모박스 2개 만들면, 마진이 1개로 합쳐짐
        - 위 현상이 싫다면, 테두리 띄어 놓으면 된다!

- body에 기본 margin이 있음
    - 그래서 맨 위에 이렇게 설정해놓으면 좋긴 함
        ```
        body {
            margin: 0px;
        }
        ```

- position
    - 포지션 부여하면 좌표이동가능
        ```
        <!-- 내 원래 위치를 기준으로 이동할 때 -->
        position: relative;
        top: 100px;
        left: 100px;
        ```
    - 포지션 부여하면 공중에 뜸
    - 여러 속성
        - static 좌표이동x
        - fixed 현재화면이 기준
            - 화면에 달라붙는 요소를 구현할 수 있음
        - absolute 내 부모 태그가 기준!
            - 정확히는 내 부모 태그 중 position: relative 가진 부모가 기준!!
            - 가운데 정렬하려면??
                ```
                left: 0;
                right: 0;
                margin: auto;
                width: 150px;
                ```

- z index
    - 공중에 떠 있는 애들이 많다면??
        - 이 인덱스가 높을수록 앞으로 온다!!

- 반응형 width
    - 브라우저 현재창의 width === `<body>` 의 width
    - 반응형 웹페이지 만들고 싶으면 퍼센트 사용하자!
        - 그치만 이거의 문제점은 pc에서 너무 큼
            - 그래서 max-width를 사용하자!
            - 최대폭을 지정하여 이거보다 더 커지지 않는다!!!
    - 주의할 점은 width는 눈에 보이는 박스 크기가 아니라 content 영역의 너비이다!
        - 이를 해결하기 위해서는 `box-sizing: border-box` 활용하잘
        - 이러면 width가 padding, border 포함함
        - 그래서 이렇게 설정하면 편하긴 함
            ```css
            div {
                box-sizing: border-box;
            }
            ```

- 참고로 브라우저 마다 디자인 모양이 다를 수 있음
    - normalize.css  이런거 찾아보셈

- 폼, 인풋 태그
    -  `<form>`
        - 작성한 내용이 어떤 서버경로로 전달될지
    - `<input>`
        - 입력할 타입 지정 가능
        - 타입에는 date, password, email, checkbox, radio
        - value를 붙이면, 기본적으로 채워질 값 설정 가능
        - name으로 인풋이름 지정 가능, 서버개발시 필요
        - 설렉트 박스도 만들 수 있음
            ```
            <select>
                <option></option>
            </select>
            ```
        - textarea 도 있음
        - input 전송버튼도 만들 수 있음
            ```css
            <button type="submit">전송</button>
            <input type="submit">
            ```
        - `input[type=email]`으로 특정 속성값을 가지는 경우를 선택 가능

- 설렉터에서 콤마쓰면 중복선택가능
    ```css
    div, input, textarea {
        box-sizing: border-box;
    }
    ```

- label 태그
    - for 속성 부여 가능
    - 아래와 같이 사용
        ```css
        <input type="checkbox" id="subscribe">
        <label for="subscribe">누르기</label>
        ```
        라벨을 누르면 인풋 누른것과 동일하게 동작
    
- 테이블 만들기
    - tr은 row, td는 column을 의미
    - 제목행은 thead에 넣고, 일반행은 tbody에 넣자!
    - 테이블의 기본적으로 존재하는 틈을 없애기 위해서는, `border-collapse: collapse;`를 주자
    - 셀 안의 요소 간의 세로 정렬 -> vertical-align
        - super: 위첨자
        - sub: 아래첨자
        - 근데 테이블안에서는 top, middle, bottom 만 가능!
    - `display: inline` 의 경우는 항상 옆으로 채워지는 폭과 너비가 없는 요소
        - span 같은 것들
    - 일반 div로 테이블 만들기
        - `<div style="display: table">`

- n-th child selector
    - n번째 나오는 요소만 선택
    ```
    .cart-table td:nth-child(2) {
        color: red;
    } 
    ```
    - 짝수, 홀수 선택 가능
        - even, odd
    - 3의 배수 선택
        - 3n+0

- td 하나로 합치기
    - `colspan="5"` td 5개 합칠 수 있음

- 인터랙티브 버튼 만들기
    - `cursor: pointer;` css에 추가하기 -> 커서 바뀜
    - pseudo-class 설렉터
        - `.btn:hover {...}` 마우스 올려놓은 경우
        - `.btn:active {...}` 클릭 중 스타일 
        - `.btn:focus {...}` 
        - a태그에도 사용가능
            ```
            a:link { 
                color : red; /*방문 전 링크*/ 
            } 
            a:visited { 
                color : black; /*방문 후 링크*/ 
            } 
            ```

- 코드양이 줄어드는 class 작명법
    - 뼈대용 class, 살점용 class 각각 제작
        - 이를 OOCSS -> Object Oriented CSS
        - utility 클래스에서 주로 사용함
    - 클래스 작명할때 창의력이 딸리다면??
        - BEM 룰 -> Block Element Modifier
        - 덩어리이름__역할--세부특징

</details>

<details>
<summary> 중급모듈 - 2023.01.23</summary>

- 폰트 넣는 법
    - 컴마를 활용해 여러개 지정할 수 있음
    - 커스텀 폰트 넣는 법
        ```css
        @font-face {
        font-family : '이쁜폰트';
        src : url(nanumsquare.ttf)
        }
        ```
    - 한글폰트 사이즈는 크기가 큼...
        - 1, 2개만 쓰자
    - 용량 줄이기 위해서는 woff 파일을 쓰자.
    - 폰트 부드럽게 처리하려면??
        ```css
            transform : rotate(0.04deg); 
        ```

- 박스 가로로 배치하는 또 다른 방법!!
    - FlexBox
        ```
            display: flex;
            <!-- 가운데 정렬 -->
            justify-content: center;
            <!-- 세로로 배치하고 싶다면 -->
            flex-direction: column;
            <!-- width 크면 밑으로 보내고 싶다면?? -->
            flex-wrap: wrap;
            <!-- 상하정렬을 하고 싶다면?? -->
            align-items: center;
            <!-- 박스 크기를 비율로 설정가능 -->
            flex-grow: 2;
        ```

- vscode의 플러그인을 활용하여 코딩하자
    - lorem 해주면 임시 글자 무작위 생성
    - Emmet을 적극 활용하자!

- head 태그에 들어갈 수 있는 내용 정리
    - 각종 css 파일들
    - 스타일 태그
    - 여러가지 메타 태그
        - 인코딩 형식, 검색결과 화면 글귀 수정, zoom 레벨이나 초기 폭 지정
        ```
            <meta charset="UTF-8">
            <meta name="description" content="html 잘하는 코딩애플입니다.">
            <meta name="keywords" content="HTML,CSS,JavaScript,자바스크립트,코딩">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ```
    - open graph
        - 링크 공유시 박스가 뜨고, 설명 제목 이미지 띄워주는거 커스터마이징
        ```
            <meta property="og:image" content="/이미지경로.jpg">
            <meta property="og:description" content="사이트설명">
            <meta property="og:title" content="사이트제목">
        ```
    - favicon

- 반응형 레이아웃 만들기
    - 화면 사이즈가 작으면 스타일을 변경해 주세요!
    - vw = view port width
        - 브라우저 폭에 비례
    - vh = view port height
    - rem = 기본 폰트 사이즈에 비례
        - 기본 폰트 사이즈는 16px
        - 모든 곳을 rem으로 크기 지정하면, 기본 font-size커져도 모든게 같이 커짐
        - 그런데 요즘은 안씀...
    - em = 내 폰트사이즈에 비례
    - 반응형 사이트 만들려면 이거 복붙
        ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ```
    - media query 문법 사용하기
        - css 파일 맨 밑에 적기, 여러개 넣을 수 있음
        ```css
        @media screen and (max-width : 1200px) { 
        .box { 
            font-size : 40px; 
        } 
        } 

        @media screen and (max-width : 768px) { 
        .box { 
            font-size : 30px; 
        } 
        }
        ```
        - break point는 다른 사람꺼 따라하자.

- 폰트 어썸을 이용하여 아이콘 넣기
    - cdn, 혹은 직접 다운로드하여 사용하기
    - 예제 아이콘 꾸미기
        ```css
            .product-container i {
                background-color: burlywood;
                width: 100px;
                heigth: 100px;
                border-radius: 50px;
                padding-top 25px;
                box-sizing: border-box;
                color: white;
            }
        ```

- 애니메이션 만드는 법칙
    1. 시작스타일 만들기
    2. 최종 스타일 만들기
    3. 언제 최종스타일로 변하는지
    4. transition으로 애니메이션 주기
        ```
        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            opacity: 0;
            <!-- 위의 스타일이 변하면 1초에 걸쳐 변하게 하셈 -->
            transition: opacity 1s;
        }
        .overlay:hover {
            opacity: 1;
        }
        ```
- 이미지 위에 오버레이 씌울때 오버레이가 아래 부분에서 더 긴 경우가 있음
    - 그때 이미지에 display: block 속성 주면 고쳐짐

- overflow: hiddne; 속성으로 넘치는 요소 안 보이게 설정하기!

- bootstrp 쓰는 이유 
    - 개발 시간 단축 
    - 설치하는 법
        - bootstrap.min.css
        - boostrap.bundle.min.js
    - utility 클래스도 제공
    - 레이아웃 잡기도 쉬움
        - 한 row 는 12개 col로 이루어짐
            - col-6, col-6
            - col-3, col-3, col-3, col-3
        - 그리드를 통해 반응형 구현 가능함!
            - xl, lg, md, sm 등등
            - col-lg-6 -> lg 이상에서만 6을 적용해주세요!
        - media query 없이도 구현 가능!
        - order 기능도 있음
            - 그래서 조건마다 컬럼의 위치를 바꿀 수 있다!
        
- CSS 덮어쓰기 하는 법
    - 같은 클래스명으로 더 밑에 작성하면 끝!
        - 더 밑에 있는 거를 적용해줌
    - 우선 순위 높이기
        - tag > id > class
        - !important 붙은 거는 무조건적으로 적용된다!
        - 이거는 비추
    - specificity 점수 높이기
        - 구체적으로 정의할 수록 점수가 높아져, 우선적으로 적용됨!
        - 설렉터를 복잡하게 쓸수록, 미래에 덮어쓰기 힘들어짐...


</details>
