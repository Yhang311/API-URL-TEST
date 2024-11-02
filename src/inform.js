

async function fetch_calendar(token) {

    //select one of the URL 
    //Then restart the web
    //해당 URL을 선택하고 다시 시작하면 새로운 정보를 볼 수 있습니다.

    const url = 'http://220.88.39.23:5000/api/calendar/past_events';
    //const url = 'http://220.88.39.23:5000/api/calendar/planned_events';
    //const url = 'http://220.88.39.23:5000/api/stats';
    //const url = 'http://220.88.39.23:5000/api/stats/10';
    //const url = 'http://220.88.39.23:5000/api/news/all_blocks';
    //const url = 'http://220.88.39.23:5000/api/news/block_headlines';
    //const url = 'http://220.88.39.23:5000/api/news/block_internal';
    //const url = 'http://220.88.39.23:5000api/news/block_internal/match_result';
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // 添加 token 到 Authorization 头
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // 捕获服务器返回的详细错误信息
            console.error("Error message from server:", errorMessage);
            throw new Error(`Failed to fetch calendar events: ${response.status}`);
        }

        const calendar_data = await response.json();
        return calendar_data; 

    } catch (error) {
        console.error("Error fetching calendar data:", error);
        throw error; 
    }
}

export default fetch_calendar;
