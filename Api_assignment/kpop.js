//Api URLs
const api1 = 'https://k-pop.p.rapidapi.com/girl-groups';
const api2 = 'https://k-pop.p.rapidapi.com/boy-groups';
const api3 = 'https://k-pop.p.rapidapi.com/idols';
const api4 = 'https://k-pop.p.rapidapi.com/songs';
const api_key = '9df40bec4bmsh3fb79e4afc610ecp166a0fjsnef56e472e416';

//Async Function
async function fetchKpopInfo(kpop_Info) {
    const kpop_display = document.getElementById('kpop_display');
    kpop_display.innerHTML = '<p>Loading...</p>';
    const kpop_check = document.getElementById('kpop_check');
    const startTime = performance.now();

    if (kpop_check.value = 1 ){{
        try {
            const response = await fetch(`${api1}?=${encodeURIComponent(kpop_Info)}`, {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': api_key,
                            'x-rapidapi-host':  'k-pop.p.rapidapi.com',
                        },
            });
    
                    const endTime = performance.now();
                    const fetchDuration = (endTime - startTime).toFixed(2);
    
                    if (!response.ok) {
                        throw new Error(`Failed to fetch kpop data: ${response.status}`);
                    }
    
                    const kpop_json = await response.json();
                    if (!data.kpop_json || data.kpop_json.length === 0) {
                        throw new Error('No kpop data found.');
                    }
    
                    displayKpopData(data.kpop_json, fetchDuration);
                } catch (error) {
                    kpop_display.innerHTML = `<p>Error: ${error.message}</p>`;
                }
            }
            
        } else if (kpop_check.value = 2){
        try {
            const response = await fetch(`${api2}?=${encodeURIComponent(kpop_Info)}`, {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': api_key,
                            'x-rapidapi-host':  'k-pop.p.rapidapi.com',
                        },
            });
    
                    const endTime = performance.now();
                    const fetchDuration = (endTime - startTime).toFixed(2);
    
                    if (!response.ok) {
                        throw new Error(`Failed to fetch kpop data: ${response.status}`);
                    }
    
                    const kpop_json = await response.json();
                    if (!data.kpop_json || data.kpop_json.length === 0) {
                        throw new Error('No kpop data found.');
                    }
    
                    displayKpopData(data.kpop_json, fetchDuration);
                } catch (error) {
                    kpop_display.innerHTML = `<p>Error: ${error.message}</p>`;
                }
        }else if (kpop_check.value = 3){
            try {
                const response = await fetch(`${api3}?=${encodeURIComponent(kpop_Info)}`, {
                            method: 'GET',
                            headers: {
                                'x-rapidapi-key': api_key,
                                'x-rapidapi-host':  'k-pop.p.rapidapi.com',
                            },
                });
        
                        const endTime = performance.now();
                        const fetchDuration = (endTime - startTime).toFixed(2);
        
                        if (!response.ok) {
                            throw new Error(`Failed to fetch kpop data: ${response.status}`);
                        }
        
                        const kpop_json = await response.json();
                        if (!data.kpop_json || data.kpop_json.length === 0) {
                            throw new Error('No kpop data found.');
                        }
        
                        displayKpopData(data.kpop_json, fetchDuration);
                    } catch (error) {
                        kpop_display.innerHTML = `<p>Error: ${error.message}</p>`;
                    }
        }else if (kpop_check.value = 4){
            try {
                const response = await fetch(`${api4}?=${encodeURIComponent(kpop_Info)}`, {
                            method: 'GET',
                            headers: {
                                'x-rapidapi-key': api_key,
                                'x-rapidapi-host':  'k-pop.p.rapidapi.com',
                            },
                });
        
                        const endTime = performance.now();
                        const fetchDuration = (endTime - startTime).toFixed(2);
        
                        if (!response.ok) {
                            throw new Error(`Failed to fetch kpop data: ${response.status}`);
                        }
        
                        const kpop_json = await response.json();
                        if (!data.kpop_json || data.kpop_json.length === 0) {
                            throw new Error('No kpop data found.');
                        }
        
                        displayKpopData(data.kpop_json, fetchDuration);
                    } catch (error) {
                        kpop_display.innerHTML = `<p>Error: ${error.message}</p>`;
                    }
        }

    
            function displayKpopData(kpop_data, fetchDuration) {
                const kpop_display = document.getElementById('kpop_display');
                kpop_display.innerHTML = `<p><strong>Fetch Time:</strong> ${fetchDuration} ms</p>`;
    
                kpop_data.forEach(data => {
                    const kpopContainer = document.createElement('div');
                    kpopContainer.style.marginBottom = '20px';
                    kpopContainer.style.border = '5px';
                    kpopContainer.style.borderColor = 'slateblue';
                    Container.innerHTML = `
                    <p>${data.data}</p>  
                    `;
                    kpop_display.appendChild(kpopContainer);
                });
            }
    
        }
    	     
document.getElementById('kpopInfo').addEventListener('click', fetchKpopInfo);