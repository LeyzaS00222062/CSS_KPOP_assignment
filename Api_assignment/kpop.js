// API URLs for two endpoints (replace with real API endpoints)
const api1 = 'https://k-pop.p.rapidapi.com/girl-groups';
//const api2 = 'https://k-pop.p.rapidapi.com/boy-groups';
const api_key = '9df40bec4bmsh3fb79e4afc610ecp166a0fjsnef56e472e416';

async function fetchKpopGroup(kpop_group) {
    const kpop_Group = document.getElementById('kpop_display');
    kpop_Group.innerHTML = '<p>Loading...</p>';

     const startTime = performance.now();

     try {
          const response = await fetch(`${api1}?=${encodeURIComponent(kpop_group)}`, {
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
            const kpop_group = document.getElementById('kpop_display');
            kpop_group.innerHTML = `<p><strong>Fetch Time:</strong> ${fetchDuration} ms</p>`;

            kpop_data.forEach(kpop => {
                const kpopContainer = document.createElement('div');
                kpopContainer.style.marginBottom = '20px';
                Container.innerHTML = `
                    
                `;
                kpop_group.appendChild(kpopContainer);
            });
        }
		

        

document.getElementById('fetch-data').addEventListener('click', fetchKpopGroup);

