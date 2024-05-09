import cheerio from 'cheerio';
import parseMenu from './parseMenu'

const getData = async (url: string) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
  
      /* Find <th>s, which contain the time, such as "조식 8:00~9:00" */
      const timeList = $("thead th").toArray().map((el) => $(el).text());
      /* Find <tbody>s, which contain the menu of each time */
      const menuList = $("tbody td").toArray().map((el) => {
        return $(el).find('.list-1st').text() !== "" ? $(el).find('.list-1st').text() : $(el).text();
      });
      const contentList = timeList.map((time, i) => {
        return { menu: menuList[i], time };
      });
      return contentList;
    } catch (error) {
      console.error(error);
      return null;
      // res.status(500).json({ success: false });
    }
  }
  
export { getData };


async function fetchDataAndLog() {
  try {
      const data = await getData("https://www.kaist.ac.kr/kr/html/campus/053001.html?dvs_cd=east2&stt_dt=2024-05-08"); //크롤링하고자 하는 url 
      console.log(data); //for raw data: before parsing 

      
      if(data){
        console.log(JSON.stringify(parseMenu(data, "east2" ), null, 2)); // url에 해당하는 식당 parseMenu의 두번째 인자에 입력 ex)  fclt, west, east1, east2, emp  
      }
       
      

  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

fetchDataAndLog();