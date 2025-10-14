## Signing Commits

- gpg --full-generate-key
- gpg --list-secret-keys --keyid-format LONG
- git config --global user.signingkey {your_key_id}
- git config --global commit.gpgSign true 
- gpg --armor --export {your_email}

### Checking your commits

- git log --show-signature

## Branches

- main (default)