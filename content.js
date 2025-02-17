// content.js
(async () => {
    // Add layout switcher
    const layoutSwitcher = document.createElement('div');
    layoutSwitcher.className = 'layout-switcher';
    layoutSwitcher.innerHTML = `
      <button class="layout-btn" data-layout="default">Default</button>
      <button class="layout-btn" data-layout="grid">Grid</button>
    `;
    document.body.appendChild(layoutSwitcher);
  
    // Load saved layout
    chrome.storage.local.get(['layout'], (result) => {
      if (result.layout) {
        document.documentElement.classList.add(`${result.layout}-layout`);
      }
    });
  
    // Handle layout switching
    layoutSwitcher.addEventListener('click', (e) => {
      if (e.target.classList.contains('layout-btn')) {
        const layout = e.target.dataset.layout;
        document.documentElement.className = '';
        document.documentElement.classList.add(`${layout}-layout`);
        chrome.storage.local.set({ layout });
      }
    });
  
    // Fetch and display enhanced stats
    async function getEnhancedStats() {
      try {
        const response = await fetch('https://api.github.com/users/mdzubayerhossain/repos');
        const repos = await response.json();
        
        const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const forks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
        const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
  
        return { stars, forks, languages };
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        return null;
      }
    }
  
    // Create stats container
    const statsContainer = document.createElement('div');
    statsContainer.className = 'enhanced-stats';
    
    // Insert stats container after bio
    const bio = document.querySelector('.js-profile-editable-replace');
    if (bio) {
      const stats = await getEnhancedStats();
      
      statsContainer.innerHTML = `
        <div class="stat-item">
          <div class="stat-value">${stats?.stars || 0}</div>
          <div class="stat-label">Total Stars</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats?.forks || 0}</div>
          <div class="stat-label">Total Forks</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats?.languages?.length || 0}</div>
          <div class="stat-label">Languages Used</div>
        </div>
      `;
      
      bio.insertAdjacentElement('afterend', statsContainer);
    }
  
    // Add contribution graph enhancements
    const contributionGraph = document.querySelector('.js-calendar-graph');
    if (contributionGraph) {
      contributionGraph.style.transform = 'scale(1.05)';
      contributionGraph.style.transition = 'transform 0.3s ease';
    }
  })();
