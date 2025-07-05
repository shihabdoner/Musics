function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = Array.from(document.querySelectorAll('#ParentButtons button'))
        .find(btn => btn.getAttribute('onclick').includes(sectionId));

    // If section is currently shown, hide it and remove active state
    if (section.style.display === 'block') {
        section.style.display = 'none';
        if (button) button.classList.remove('active');
    } else {
        // Hide all sections and remove active from all buttons
        const allSections = ['SpotifyDIV', 'YouTubeDIV', 'OtherLinksDIV'];
        allSections.forEach(id => {
            const sec = document.getElementById(id);
            const btn = Array.from(document.querySelectorAll('#ParentButtons button'))
                .find(b => b.getAttribute('onclick').includes(id));
            if (sec) sec.style.display = 'none';
            if (btn) btn.classList.remove('active');
        });

        // Show selected section and mark button as active
        section.style.display = 'block';
        if (button) button.classList.add('active');
    }
}
