# 파트2 1팀 기초 프로젝트

## 📖 프로젝트 소개

이 프로젝트는 동료들에게 익명의 롤링 페이퍼를 작성하고 공유할 수 있는 웹 애플리케이션입니다. 사용자는 자신만의 롤링 페이퍼를 만들고, 다른 사람들에게 공유하여 메시지를 받을 수 있습니다.

## ✨ 주요 기능

- **롤링 페이퍼 생성 및 공유**: 나만의 롤링 페이퍼 페이지를 만들고 링크를 통해 친구나 동료에게 공유할 수 있습니다.

- **익명 메시지 작성**: 공유받은 페이지에 익명으로 따뜻한 메시지를 남길 수 있습니다.

- **메시지 확인 및 관리**: 내가 받은 롤링 페이퍼의 메시지들을 한눈에 모아볼 수 있습니다.

## 🌐 라이브 데모

[**프로젝트 바로가기**](https://rolling-beta.vercel.app/)

## 🛠️ 기술 스택

- **React**: `19.1.0`

- **Vite**: `7.0.4`

- **React Router DOM**: `7.6.3`

- **Styled Components**: `6.1.19`

- **ESLint & Prettier**: 코드 품질과 일관성을 유지하기 위해 사용합니다.

## 🚀 시작하기

### 요구 사항

- **Node.js**: `22.17.0`

### 설치 및 실행

1. **저장소 복제**:

   ```
   git clone [https://github.com/sseung30/rolling.git](https://github.com/sseung30/rolling.git)
   cd Rolling-a211c6a3986a1d6fdd703eed1d7d9b48a4b3bf19
   ```

2. **의존성 설치**:

   ```
   npm install
   ```

3. **개발 서버 실행**:

   ```
   npm run dev
   ```

### 사용 가능한 스크립트

- `npm run dev`: 개발 서버를 시작합니다.

- `npm run build`: 프로덕션용으로 앱을 빌드합니다.

- `npm run lint`: 코드베이스를 검사합니다.

- `npm run preview`: 프로덕션 빌드를 로컬에서 미리 봅니다.

- `npm run format`: 코드 형식을 맞춥니다.

## 📁 폴더 구조 및 주요 기능

```
Rolling/
├── public/              # 정적 에셋
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── pages/           # 라우트별 페이지 컴포넌트
│   │   ├── HomePage.jsx             # 메인 페이지
│   │   ├── AllPapersPage.jsx        # 생성된 모든 롤링 페이퍼 목록
│   │   ├── MakePersonalPage.jsx     # 롤링 페이퍼 생성 페이지
│   │   ├── PersonalPage.jsx         # 개별 롤링 페이퍼 상세 페이지
│   │   ├── SendPaperPage.jsx        # 메시지 작성 페이지
│   │   └── EditPage.jsx             # 롤링 페이퍼 수정 페이지
│   ├── styles/
│   │   ├── GlobalStyle.js # 전역 스타일
│   │   └── Theme.js       # 테마 (색상, 폰트 등)
│   ├── App.jsx            # 메인 애플리케이션 컴포넌트
│   └── main.jsx         # 애플리케이션 진입점
├── .nvmrc               # Node.js 버전
├── package.json         # 프로젝트 의존성 및 스크립트
└── vite.config.js       # Vite 설정
```

## 🔧 추천 VSCode 확장 프로그램

- **ESLint**: `dbaeumer.vscode-eslint`

- **Prettier**: `esbenp.prettier-vscode`

- **Styled Components**: `styled-components.vscode-styled-components`

## 🧑‍💻 팀원 소개

| **이름** | **역할** | **GitHub**                                |
| -------- | -------- | ----------------------------------------- |
| 김희수   | Frontend | [nizoo0516](https://github.com/nizoo0516) |
| 금정훈   | Frontend | [alvin-kum](https://github.com/alvin-kum) |
| 박세진   | Frontend | [xha2023](https://github.com/xha2023)     |
| 이승현   | Frontend | [sseung30](https://github.com/sseung30)   |

## 🤝 기여 방법 (Contributing)

이 프로젝트에 기여하고 싶으시다면, 언제든지 환영합니다! 기여 방법은 다음과 같습니다.

1. 이 저장소를 `Fork` 해주세요.

2. 새로운 기능이나 버그 수정을 위한 브랜치를 생성해주세요. (`git checkout -b feature/AmazingFeature`)

3. 수정 사항을 커밋해주세요. (`git commit -m 'Add some AmazingFeature'`)

4. 새로운 브랜치로 `Push` 해주세요. (`git push origin feature/AmazingFeature`)

5. `Pull Request`를 열어주세요.

프로젝트 개선을 위한 아이디어나 이슈 제보도 언제나 환영입니다.

## 📜 라이선스

이 프로젝트는 [MIT 라이선스](https://opensource.org/licenses/MIT)를 따릅니다.
