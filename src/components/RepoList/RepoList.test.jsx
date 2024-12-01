import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import RepoList from './RepoList';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios');

describe('RepoList Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', () => {
    render(<RepoList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders repository list on successful fetch', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Repo1',
        description: 'Description for Repo1',
        owner: { login: 'owner1' },
        language: 'JavaScript',
        stargazers_count: 10,
        forks: 5,
      },
      {
        id: 2,
        name: 'Repo2',
        description: 'Description for Repo2',
        owner: { login: 'owner2' },
        language: 'Python',
        stargazers_count: 20,
        forks: 10,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(
      <Router>
        <RepoList />
      </Router>
    );

    await waitFor(() => {
      // Verify repository names and details
      mockData.forEach((repo) => {
        expect(screen.getByText(repo.name)).toBeInTheDocument();
        expect(screen.getByText(repo.description || 'No description available')).toBeInTheDocument();
        expect(screen.getByText(`by ${repo.owner.login}`)).toBeInTheDocument();
        expect(screen.getByText(repo.language)).toBeInTheDocument();
        expect(screen.getByText(`⭐ ${repo.stargazers_count}`)).toBeInTheDocument();
        expect(screen.getByText(`🍴 ${repo.forks}`)).toBeInTheDocument();
      });
    });
  });

  test('renders error message on API failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch data'));

    render(
      <Router>
        <RepoList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument();
    });
  });
});
