import fetch from "node-fetch";

export async function getUserProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`User not found. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
}

export async function getUserRepositories(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );

    if (!response.ok) {
      throw new Error(`Repositories not found. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching repositories:", error.message);
  }
}