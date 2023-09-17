
    // Handle view option change
    const viewSelect = document.getElementById('view-select');
    viewSelect.addEventListener('change', function() {
      const viewOption = parseInt(viewSelect.value);
      const byQd001 = document.getElementById('surah-001');
      const byQd002 = document.getElementById('surah-002');
      const byQd003 = document.getElementById('surah-003');
      const byQd004 = document.getElementById('surah-004');
      const byQd005 = document.getElementById('surah-005');
      const byQd006 = document.getElementById('surah-006');
      const byQd007 = document.getElementById('surah-007');
      const byQd008 = document.getElementById('surah-008');
      const byQd009 = document.getElementById('surah-009');
      const byQd010 = document.getElementById('surah-010');
      const byQd011 = document.getElementById('surah-011');
      const byQd012 = document.getElementById('surah-012');
      const byQd013 = document.getElementById('surah-013');
      // Show/hide view options based on selected value
      if (viewOption === 001) {
        byQd001.style.display = 'block';
        byQd002.style.display = 'none';
        byQd003.style.display = 'none';
        byQd004.style.display = 'none';
        byQd005.style.display = 'none';
        byQd006.style.display = 'none';
        byQd007.style.display = 'none';
        byQd008.style.display = 'none';
        byQd009.style.display = 'none';
        byQd010.style.display = 'none';
        byQd011.style.display = 'none';
        byQd012.style.display = 'none';
        byQd013.style.display = 'none';
      } else if (viewOption === 002) {
        byQd001.style.display = 'none';
        byQd002.style.display = 'block';
        byQd003.style.display = 'none';
        byQd004.style.display = 'none';
        byQd005.style.display = 'none';
        byQd006.style.display = 'none';
        byQd007.style.display = 'none';
        byQd008.style.display = 'none';
        byQd009.style.display = 'none';
        byQd010.style.display = 'none';
        byQd011.style.display = 'none';
        byQd012.style.display = 'none';
        byQd013.style.display = 'none';
      } else if (viewOption === 003) {
        byQd001.style.display = 'none';
        byQd002.style.display = 'none';
        byQd003.style.display = 'block';
        byQd004.style.display = 'none';
        byQd005.style.display = 'none';
        byQd006.style.display = 'none';
        byQd007.style.display = 'none';
        byQd008.style.display = 'none';
        byQd009.style.display = 'none';
        byQd010.style.display = 'none';
        byQd011.style.display = 'none';
        byQd012.style.display = 'none';
        byQd013.style.display = 'none';
      } else if (viewOption === 004) {
        byQd001.style.display = 'none';
        byQd002.style.display = 'none';
        byQd003.style.display = 'none';
        byQd004.style.display = 'block';
        byQd005.style.display = 'none';
        byQd006.style.display = 'none';
        byQd007.style.display = 'none';
        byQd008.style.display = 'none';
        byQd009.style.display = 'none';
        byQd010.style.display = 'none';
        byQd011.style.display = 'none';
        byQd012.style.display = 'none';
        byQd013.style.display = 'none';
      }
    });
