# Godaddy Repositories Viewer

A React-based application that fetches and displays repositories from the Godaddy GitHub organization. The app allows users to browse repositories, view details such as title, description, language(s), forks, open issues, and watchers, and visit the GitHub page for each repository.

---

## Features

- Fetches data from [GitHub's API](https://api.github.com/orgs/godaddy/repos).
- Displays a searchable list of repositories.
- Detailed view for each repository, including:
  - Repository name
  - Description
  - Primary language
  - Number of forks
  - Number of open issues
  - Number of watchers
  - Link to the repository page
- Responsive and styled using **Daisy UI** (built on Tailwind CSS).
- Loading skeletons for better user experience.
- Error handling for API failures.

---

## Demo

![Screenshot of the Godaddy Repositories Viewer](demo-screenshot.png)

> **Note:** Replace `demo-screenshot.png` with an actual screenshot of your app.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/godaddy-repos-viewer.git
   cd godaddy-repos-viewer
