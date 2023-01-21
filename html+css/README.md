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
    - 기본적으로 display: block 가지고 있음
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
        - 그래서 float 다음에 오는 요소에게 영향을 줌
        - `clear: both;`를 사용하여 해결
    - `display: inline-block;`
        - 가로로 배치하는 또 다른 방법
        - 내 크기 만큼 차지하게 해주세요 라는 의미임
        - 근데 이거는 박스사이 공백제거를 해줘야 함...
            - 그래서 박스사이에 주석을 넣거나
            - font-size를 0으로 설정할 수 있음
        - 그리고 박스 안에 글자 쓰면 깨짐
            - `vertical-align: top` 을 통해 해결 가능
                - 위 속성은 inline 속성을 가지는 요소에만 적용 가능
                - 발생하는 이유는 inline-block요소는 옆에 baseline이 존재하면 위로 이동하려는 습성? 이 있음..




</details>