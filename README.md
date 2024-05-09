# This is for testing the parsing logic 


parseMenu/datascrapper.ts 파일을 실행하시면 됩니다 

command: ts-node datascrapper.ts 

### Prerequisites

Make sure you have `ts-node` installed to execute TypeScript files directly. If not already installed, you can install it using npm:

```bash
npm install -g ts-node


Note! 
parseMenu/datascrapper.ts 파일을 실행하기 전에 조금 수정해줘야 합니다 
크롤링해 올 url 을 입력해주고, 해당 url에 해당하는 식당 이름(fclt, west, east1, east2, emp) 문자열을 파싱함수의 인자로 넘겨주면 됩니다. 

입력 오류가 없다고 가정하고 파싱하였습니다. 
추후 예외사항 robust하게 바꿔도 좋을 것 같습니다. 

