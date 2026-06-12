// ===== MODULE 3: GitHub DevOps Platform =====
CHAPTER_CONTENT["3.1"] = `
<div class="content-block">
<h2>🎬 Codespaces: Your Instant Cloud IDE</h2>
<div class="callout story"><div class="callout-title">📖 Think of it like...</div>
<p>Remember spending your entire first week at a new job just "setting up your environment"? Installing Node, Python, Docker, fighting with PATH variables, only to find out it works on a Mac but not on your Windows machine? Codespaces fixes this. It gives you a complete, high-powered VS Code environment running in the cloud, configured identically for every single developer on the team.</p></div>

<h3>🧠 How DevContainers Work</h3>
<p>Codespaces are powered by <strong>DevContainers</strong>. You commit a <code>.devcontainer/devcontainer.json</code> file to your repository. This file defines:</p>
<ul>
<li>The base Docker image (e.g., Ubuntu + Node 20)</li>
<li>Which VS Code extensions should be pre-installed (e.g., ESLint, Prettier)</li>
<li>Post-create commands (e.g., <code>npm install</code>)</li>
<li>Port forwarding (e.g., forward port 3000 so you can view your web app locally)</li>
</ul>

<h3>🚀 Advanced Features</h3>
<ul>
<li><strong>Prebuilds:</strong> If your project takes 10 minutes to compile, you can configure GitHub Actions to "prebuild" the Codespace every night. When a developer clicks "New Codespace", it opens in 3 seconds, fully compiled!</li>
<li><strong>Dotfiles:</strong> You can link your personal dotfiles repository (your custom bash/zsh aliases, vim configs) and Codespaces will automatically inject them into every environment you open.</li>
<li><strong>Secrets:</strong> You can securely inject environment variables (like AWS keys) directly into the Codespace via GitHub settings without committing them.</li>
</ul>

<div class="callout best"><div class="callout-title">✅ Best Practices</div>
<p>• Set idle timeouts! Codespaces bill by the minute. Configure them to shut down after 30 minutes of inactivity.<br>
• Standardize your team's tools by heavily utilizing the <code>extensions</code> array in the devcontainer.</p></div>
</div>`;

CHAPTER_CONTENT["3.2"] = `
<div class="content-block">
<h2>🎬 GitHub Packages: Code and Artifacts Together</h2>
<p>Usually, you host your source code on GitHub, and your compiled packages on external registries (like npmjs.com for JavaScript, or Docker Hub for containers). GitHub Packages brings the registry inside GitHub.</p>

<div class="callout why"><div class="callout-title">💡 Why Use GitHub Packages?</div>
<p><strong>Permissions matching!</strong> The biggest headache with external registries is managing who has access to publish or download private packages. With GitHub Packages, if a developer has "Read" access to the repo, they automatically have access to download the package. If they have "Write", they can publish.</p></div>

<h3>Supported Registries</h3>
<ul>
<li><strong>npm</strong> (JavaScript/Node.js)</li>
<li><strong>Container Registry / ghcr.io</strong> (Docker & OCI images)</li>
<li><strong>Maven/Gradle</strong> (Java)</li>
<li><strong>RubyGems</strong> (Ruby)</li>
<li><strong>NuGet</strong> (.NET)</li>
</ul>

<div class="callout best"><div class="callout-title">✅ Pro Tip: The GITHUB_TOKEN</div>
<p>When publishing packages via GitHub Actions, you don't need to create complex API keys. You can simply use the built-in <code>\${{ secrets.GITHUB_TOKEN }}</code> which automatically authenticates the workflow to publish the package to your repository.</p></div>
</div>`;

CHAPTER_CONTENT["3.3"] = `
<div class="content-block">
<h2>🎬 GitHub Copilot: AI Pair Programming</h2>
<p>Copilot isn't just an autocomplete; it's an AI model (based on OpenAI's Codex/GPT-4) trained on billions of lines of public code. It understands context.</p>

<h3>Three Ways to Use Copilot</h3>
<ol>
<li><strong>Ghost Text (Inline):</strong> As you type, Copilot suggests the next few lines or the entire function in gray text. Hit <code>Tab</code> to accept.</li>
<li><strong>Copilot Chat:</strong> A sidebar chat window. You can highlight a block of code and ask, "Explain this to me," "Find the bug here," or "Write unit tests for this function."</li>
<li><strong>Copilot CLI:</strong> Stuck in the terminal? Ask Copilot to translate English into bash: <code>github-copilot-cli "how to undo my last git commit"</code>.</li>
</ol>

<h3>🧠 How to Write Prompts for Copilot</h3>
<p>Copilot reads the <em>current file</em> and <em>open tabs</em> to gain context. To get the best results:</p>
<ul>
<li><strong>Write descriptive comments:</strong> <code>// Fetch user data from /api/users, filter out inactive users, and map to an array of emails</code></li>
<li><strong>Give good names:</strong> Naming a function <code>calculateTaxForRegion(region, amount)</code> gives Copilot infinitely more context than <code>doMath(x, y)</code>.</li>
<li><strong>Provide examples:</strong> Show a comment with expected input/output before the function.</li>
</ul>

<div class="callout best"><div class="callout-title">✅ Enterprise vs Individual Privacy</div>
<p>For individuals, GitHub may use your prompts to train the model. For <strong>Copilot Business/Enterprise</strong>, GitHub guarantees 100% privacy - your code is NOT retained and NOT used for training.</p></div>
</div>`;

CHAPTER_CONTENT["3.4"] = `
<div class="content-block">
<h2>🎬 Advanced Security (GHAS)</h2>
<p>GitHub Advanced Security is an enterprise add-on that brings enterprise-grade security scanning directly into the developer workflow (the Pull Request), rather than waiting for a security audit weeks later.</p>

<h3>1. Code Scanning (CodeQL)</h3>
<p>CodeQL treats your code like a database. It runs queries against it to find logical vulnerabilities. Unlike regular linters (which just check syntax), CodeQL traces data flow. It can see if user input from an HTTP request travels through the code and ends up in a SQL query without being sanitized (SQL Injection).</p>

<h3>2. Secret Scanning & Push Protection</h3>
<p>It scans your entire git history for API keys, AWS tokens, and passwords. <br>
<strong>Push Protection</strong> is the real magic: If you try to run <code>git push</code> containing an AWS key, GitHub will actively reject the push at the terminal level before it ever reaches the server.</p>

<h3>3. Dependency Review</h3>
<p>When you open a PR that adds a new library to <code>package.json</code>, GitHub checks if that specific version has known vulnerabilities or malicious code, warning the reviewer before they approve.</p>
</div>`;

CHAPTER_CONTENT["3.5"] = `
<div class="content-block">
<h2>🎬 Dependabot: The Automated Janitor</h2>
<p>Software rots. A library you installed 6 months ago might now have a critical vulnerability. Dependabot fixes this.</p>

<h3>Two Modes of Dependabot</h3>
<ol>
<li><strong>Dependabot Alerts & Security Updates:</strong> (Free for everyone). When a CVE (vulnerability) is discovered in a library you use, GitHub sends you an alert. Better yet, it automatically opens a Pull Request that updates that specific library to the patched version.</li>
<li><strong>Dependabot Version Updates:</strong> (Configured via <code>.github/dependabot.yml</code>). This keeps your dependencies fresh even if there are no vulnerabilities. It will periodically check for new versions of all your libraries and open PRs to update them.</li>
</ol>

<div class="code-block">
<div class="code-block-header"><span>.github/dependabot.yml</span></div>
<pre>version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly" # Check for updates every week
    ignore:
      - dependency-name: "react" # Don't auto-update React, it's too risky</pre>
</div>

<div class="callout best"><div class="callout-title">✅ The Ultimate Automation</div>
<p>Combine Dependabot with GitHub Actions! When Dependabot opens a PR, Actions runs your test suite. If tests pass, you can configure an Action to automatically merge the Dependabot PR. Zero human interaction required for maintenance!</p></div>
</div>`;

CHAPTER_CONTENT["3.6"] = `
<div class="content-block">
<h2>🎬 GitHub REST API & GraphQL</h2>
<p>Anything you can click in the GitHub UI, you can do via the API. This enables you to build custom internal tooling.</p>

<h3>REST API (v3)</h3>
<p>Standard endpoints. Easy to use, but suffers from over-fetching (getting too much data) and under-fetching (needing to make 5 different requests to get linked data).</p>
<div class="code-block">
<pre><span class="cmd">curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.github.com/repos/octocat/hello-world/pulls</span></pre>
</div>

<h3>GraphQL API (v4)</h3>
<p>Ask for exactly what you want in a single request. Much faster for complex operations.</p>
<div class="code-block">
<pre>query {
  repository(owner: "octocat", name: "hello-world") {
    pullRequests(last: 5, states: OPEN) {
      nodes {
        title
        author { login }
        reviews(first: 1) { nodes { state } }
      }
    }
  }
}</pre>
</div>

<div class="callout tip"><div class="callout-title">⚡ GitHub CLI (gh)</div>
<p>The easiest way to use the API is actually the GitHub CLI tool. You can run <code>gh api graphql -f query='...'</code> directly from your terminal, and it handles authentication automatically.</p></div>
</div>`;

CHAPTER_CONTENT["3.7"] = `
<div class="content-block">
<h2>🎬 Webhooks: Real-Time Event Driven Architecture</h2>
<p>If the API is you asking GitHub for data, Webhooks are GitHub telling you when data changes.</p>

<h3>How it Works</h3>
<p>You provide GitHub with a URL (e.g., <code>https://api.yourcompany.com/github-webhook</code>). You select events (e.g., "Pull Request Opened", "Issue Closed"). Whenever that event happens, GitHub sends an HTTP POST request to your URL containing a massive JSON payload with all the details.</p>

<h3>Security & Validation</h3>
<p>Because your webhook URL must be public to receive data from GitHub, anyone could send fake data to it. To secure it, you set a <strong>Secret</strong> in GitHub. GitHub uses this secret to generate an HMAC signature (<code>x-hub-signature-256</code> header) for every payload. Your server must calculate the same signature to verify the payload actually came from GitHub.</p>
</div>`;

CHAPTER_CONTENT["3.8"] = `
<div class="content-block">
<h2>🎬 GitHub Marketplace & Custom Actions</h2>
<p>The Marketplace is the app store for GitHub. You can find Actions for AWS deployment, Slack notifications, code coverage, and more.</p>

<h3>Building Your Own Custom Actions</h3>
<p>You aren't limited to what's in the marketplace. You can build your own reusable Actions. There are three types:</p>
<ol>
<li><strong>Composite Actions:</strong> Combine multiple workflow steps into one reusable block. (Easiest to write, uses YAML).</li>
<li><strong>JavaScript Actions:</strong> Write complex logic using Node.js. Runs directly on the runner.</li>
<li><strong>Docker Container Actions:</strong> Package your code and its entire OS environment into a Docker container. Ensures absolute consistency, but runs slightly slower.</li>
</ol>
</div>`;

CHAPTER_CONTENT["3.9"] = `
<div class="content-block">
<h2>🎬 GitHub Apps: The Modern Integration</h2>
<p>When building a tool that integrates with GitHub, always build a <strong>GitHub App</strong>, not an OAuth App or a Personal Access Token (PAT).</p>

<h3>Why GitHub Apps Win</h3>
<ul>
<li><strong>Fine-grained Permissions:</strong> Instead of "Full Read/Write access to everything" (PATs), an App requests specific permissions like "Read access to Issues, Write access to Pull Requests".</li>
<li><strong>Bot Identity:</strong> Apps act as themselves. When the app comments on a PR, it says "My-Bot [bot]", whereas a PAT acts as YOU. If you leave the company, the bot keeps working.</li>
<li><strong>Webhooks Included:</strong> Apps have a built-in webhook URL to receive events specifically for the repositories they are installed on.</li>
<li><strong>Server-to-Server Auth:</strong> Apps generate short-lived installation tokens (valid for 1 hour) dynamically, which is vastly more secure than a static PAT.</li>
</ul>
</div>`;

// ===== MODULE 4: Admin & Governance =====
CHAPTER_CONTENT["4.1"] = `
<div class="content-block">
<h2>🎬 Organizations: Governing the Enterprise</h2>
<p>While personal accounts are for individuals, Organizations are the central hub for companies. They provide centralized billing, security policies, and team management.</p>

<h3>Key Organization Policies</h3>
<ul>
<li><strong>Base Permissions:</strong> By default, what can org members do? Usually, this is set to "Read" (can clone all internal repos) or "None" (must be explicitly added to teams).</li>
<li><strong>Repository Creation:</strong> You can restrict who is allowed to create public or private repositories to prevent data leaks.</li>
<li><strong>Two-Factor Authentication:</strong> You can strictly enforce that anyone without 2FA enabled is immediately kicked out of the organization.</li>
</ul>
</div>`;

CHAPTER_CONTENT["4.2"] = `
<div class="content-block">
<h2>🎬 Teams & Permissions Management</h2>
<p>Never grant users direct access to repositories. Always use Teams. If someone moves departments, you just change their team, and all their repo access updates instantly.</p>

<h3>Nested Teams</h3>
<p>You can create a hierarchy: <code>Engineering</code> -> <code>Backend</code> -> <code>Payments API</code>. <br>
If you grant the <code>Engineering</code> team Read access to a repo, all child teams inherit it.</p>

<h3>IdP Synchronization</h3>
<p>In enterprise setups, you can connect GitHub Teams directly to your Identity Provider (like Azure AD or Okta groups). When HR adds someone to the "Backend Engineers" group in Okta, they automatically join the GitHub Team.</p>

<h3>CODEOWNERS</h3>
<p>Teams integrate deeply with the <code>CODEOWNERS</code> file. You can specify:<br>
<code>/backend/database/* @my-org/db-admins</code><br>
Now, any Pull Request touching database files will automatically block merging until someone from the db-admins team approves it.</p>
</div>`;

CHAPTER_CONTENT["4.3"] = `
<div class="content-block">
<h2>🎬 Enterprise Cloud vs Server vs EMU</h2>
<p>GitHub offers three massive enterprise tiers:</p>

<h3>1. Enterprise Cloud</h3>
<p>GitHub hosts everything (github.com). You get advanced features like SAML SSO, IP Allow Lists (restrict access to corporate VPNs), and 50,000 Action minutes. The easiest and most common enterprise setup.</p>

<h3>2. Enterprise Server</h3>
<p>You download a virtual machine image and host GitHub on your own AWS/Azure/on-premise servers. Required for highly regulated industries (defense, banking) that cannot allow source code on public clouds.</p>

<h3>3. Enterprise Managed Users (EMUs)</h3>
<p>The strictest cloud model. Unlike normal GitHub where developers bring their personal accounts (<code>@john_smith</code>) to your company org, with EMUs, the company <em>creates and owns</em> the accounts (<code>@john-company</code>). Employees cannot collaborate on public open-source or access personal repos with this account. Ultimate corporate control.</p>
</div>`;

CHAPTER_CONTENT["4.4"] = `
<div class="content-block">
<h2>🎬 SAML SSO & SCIM: Identity at Scale</h2>

<h3>SAML Single Sign-On</h3>
<p>Developers don't create a GitHub password for your org. They click "Login", are redirected to Okta/Azure/Google Workspace, authenticate there (with corporate 2FA), and are redirected back. This ensures corporate password rotation policies apply to GitHub.</p>

<h3>SCIM (System for Cross-domain Identity Management)</h3>
<p>SAML handles <em>authentication</em> (logging in). SCIM handles <em>provisioning</em> (account creation/deletion).<br>
When an employee is fired and disabled in Okta, SCIM instantly sends a signal to GitHub to revoke their access. Without SCIM, you have to manually remove them from GitHub, creating a massive security hole.</p>
</div>`;

CHAPTER_CONTENT["4.5"] = `
<div class="content-block">
<h2>🎬 Audit Logs: The Source of Truth</h2>
<p>Audit logs record the "Who, What, When, and Where" of every administrative and security action in the organization.</p>

<h3>What is Tracked?</h3>
<ul>
<li>Repository creation/deletion/visibility changes</li>
<li>Team membership changes</li>
<li>Branch protection rule modifications</li>
<li>Failed login attempts and SSO authentications</li>
<li>Secret scanning alerts bypassed</li>
</ul>

<div class="callout best"><div class="callout-title">✅ Log Streaming</div>
<p>GitHub only stores audit logs for 6 months in the UI. Enterprise organizations must set up <strong>Audit Log Streaming</strong>. This pushes logs in real-time to Amazon S3, Datadog, or Splunk for infinite retention and security alert monitoring.</p></div>
</div>`;

CHAPTER_CONTENT["4.6"] = `
<div class="content-block">
<h2>🎬 Branch Protection & Rulesets (The Vault)</h2>
<p>These rules prevent developers from accidentally (or maliciously) destroying code on critical branches like <code>main</code> or <code>production</code>.</p>

<h3>Classic Branch Protection Rules</h3>
<ul>
<li><strong>Require PRs:</strong> Nobody can push directly to main. Everything must go through a PR.</li>
<li><strong>Require Approvals:</strong> Set to 1, 2, or more reviewers.</li>
<li><strong>Require Status Checks:</strong> CI (tests, linters) MUST pass.</li>
<li><strong>Require Linear History:</strong> Rejects merge commits. Forces squashing or rebasing.</li>
<li><strong>Require Signed Commits:</strong> Verifies the commit was cryptographically signed via GPG or SSH, proving the developer's identity.</li>
</ul>

<h3>The Modern Upgrade: Repository Rulesets</h3>
<p>Branch protections apply to one repo at a time. <strong>Rulesets</strong> apply organization-wide. You can create a rule: "Every repository ending in <code>-prod</code> must require 2 approvals and pass the security scan workflow." It applies instantly to current and future repos. You can also bypass rules for specific CI Bots/Apps without giving them full admin access.</p>
</div>`;

CHAPTER_CONTENT["4.7"] = `
<div class="content-block">
<h2>🎬 Custom Repository Roles</h2>
<p>Standard roles (Read, Triage, Write, Maintain, Admin) sometimes aren't enough. What if you want someone to be able to manage issues and labels, but NOT push code?</p>
<p>GitHub Enterprise allows <strong>Custom Roles</strong>. You start with a base role (e.g., Read) and add specific granular permissions like:</p>
<ul>
<li>"Mark an issue as duplicate"</li>
<li>"Bypass branch protections"</li>
<li>"View dependency insights"</li>
</ul>
<p>This strictly adheres to the security principle of <em>Least Privilege</em>.</p>
</div>`;

CHAPTER_CONTENT["4.8"] = `
<div class="content-block">
<h2>🎬 GitHub Sponsors: Funding Open Source</h2>
<p>Open source is largely built by unpaid volunteers. GitHub Sponsors allows developers and companies to financially support the projects they depend on.</p>

<h3>How it Works</h3>
<ul>
<li>Maintainers create funding tiers (e.g., $5/mo "Coffee Buyer", $500/mo "Corporate Logo on README").</li>
<li>Sponsors pay via credit card. GitHub charges ZERO fees - 100% of the money goes to the developer.</li>
<li>You can place a <code>.github/FUNDING.yml</code> file in your repo. This displays a "Sponsor" button at the top of the repository UI.</li>
</ul>
</div>`;

// ===== MODULE 5: Community & Social =====
CHAPTER_CONTENT["5.1"] = `
<div class="content-block">
<h2>🎬 Your Profile: The Developer Resume</h2>
<p>Your GitHub profile is often the first thing technical recruiters look at. It proves you can write code, use version control, and collaborate.</p>

<h3>The Profile README</h3>
<p>Create a repository with the exact same name as your username (e.g., <code>octocat/octocat</code>). The <code>README.md</code> in this repo will automatically be rendered as a massive billboard at the top of your profile page.</p>
<ul>
<li>Add your tech stack, current learning goals, and portfolio links.</li>
<li>Use markdown widgets to dynamically display your latest blog posts or GitHub stats.</li>
</ul>

<h3>Pinned Repositories</h3>
<p>Don't let recruiters dig through your 50 abandoned tutorial repos. Pin your top 6 best projects to the top of your profile. Ensure those pinned projects have excellent READMEs explaining what they do.</p>
</div>`;

CHAPTER_CONTENT["5.2"] = `
<div class="content-block">
<h2>🎬 Contributions & The Green Graph</h2>
<p>The contribution graph shows your activity over the last year. It's a visual representation of your consistency.</p>

<h3>Mastering the Graph</h3>
<ul>
<li><strong>What counts:</strong> Commits to the default branch, opening issues, opening PRs, and reviewing code.</li>
<li><strong>What DOES NOT count:</strong> Commits to a branch (until merged to main), commits to a fork (until merged upstream), starring repos.</li>
<li><strong>Private Contributions:</strong> You can toggle a setting to show anonymized activity from private repositories. Turn this on! It proves you code at work, not just on weekends.</li>
</ul>
<div class="callout tip"><div class="callout-title">⚡ Quality > Quantity</div>
<p>Don't write scripts to fake commits just to make your graph green. Real engineers can spot a fake graph instantly by looking at the commit content. Consistent, real problem-solving is what matters.</p></div>
</div>`;

CHAPTER_CONTENT["5.3"] = `
<div class="content-block">
<h2>🎬 Stars, Watch, and Social Discovery</h2>
<p>GitHub is a social network for code.</p>

<ul>
<li><strong>Stars:</strong> This is a bookmark and a "Like" button combined. Starring repos helps you find them later via <code>github.com/stars</code>. You can organize your stars into <strong>Lists</strong> (e.g., "React Tools", "Machine Learning Libraries").</li>
<li><strong>Watch:</strong> By default, you only get notifications if you are mentioned or comment on a thread. "Watching" a repo subscribes you to ALL activity. <br>
<em>Pro Tip:</em> Use the "Custom" watch option to only receive notifications for new Releases. Perfect for staying updated on framework versions!</li>
<li><strong>Following:</strong> Follow developers to see their public activity (starred repos, new repos) in your dashboard feed.</li>
</ul>
</div>`;

CHAPTER_CONTENT["5.4"] = `
<div class="content-block">
<h2>🎬 Trending & Explore</h2>
<p>How do you find cool new tech before it becomes mainstream? GitHub Trending.</p>

<h3>Trending</h3>
<p>Filters repositories and developers gaining the highest velocity of stars today, this week, or this month. You can filter by spoken language or programming language. It is the pulse of the open-source community.</p>

<h3>Explore & Topics</h3>
<p>Repositories can be tagged with topics (e.g., <code>webgl</code>, <code>rust</code>). Clicking a topic shows all related projects. The Explore page curates these into collections, offering a personalized feed based on your interests.</p>
</div>`;

CHAPTER_CONTENT["5.5"] = `
<div class="content-block">
<h2>🎬 Achievements & Badges</h2>
<p>GitHub awards gamified badges on your profile for hitting specific milestones. While just for fun, they show deep platform engagement.</p>

<ul>
<li>🦈 <strong>Pull Shark:</strong> Merging Pull Requests (Levels up at 2, 16, 128, 1024 PRs).</li>
<li>⭐ <strong>Starstruck:</strong> Creating repositories that earn stars (Levels up at 16, 128, 512, 4096 stars).</li>
<li>🌟 <strong>Galaxy Brain:</strong> Having your answers accepted in GitHub Discussions.</li>
<li>🛰️ <strong>Mars 2020 Helicopter Contributor:</strong> A rare badge given to developers whose open-source code was used on the NASA Mars Helicopter!</li>
<li>🧊 <strong>Arctic Code Vault Contributor:</strong> Given to developers whose code was snapshotted and buried in a vault in the Arctic mountain of Svalbard to preserve it for 1,000 years.</li>
</ul>
</div>`;

CHAPTER_CONTENT["5.6"] = `
<div class="content-block">
<h2>🎬 Building Your Professional Presence</h2>
<div class="callout best"><div class="callout-title">✅ The Action Plan for Job Seekers</div>
<p>If you want to use GitHub to land a job or build authority, follow this blueprint:</p>
<ol>
<li><strong>Audit your repos:</strong> Archive messy, old tutorials. Ensure your public repos reflect your current skill level.</li>
<li><strong>The "Readme" Rule:</strong> Every public project MUST have a README. It should answer: What is this? Why did you build it? How do I run it locally? Add a screenshot. If there's no README, people assume the code doesn't work.</li>
<li><strong>Write tests:</strong> Repos with CI workflows (GitHub Actions badges) and unit tests instantly signal "Senior Developer behavior."</li>
<li><strong>Contribute upstream:</strong> Find a tool you use daily. Look at their issues labeled "good first issue". Submit a PR. Having merged PRs in major open-source projects is the ultimate resume booster.</li>
</ol>
</div>
</div>`;

