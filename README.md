# [calculator](https://www.youtube.com/watch?time_continue=1&v=OEtbqawrTvo&feature=emb_logo)

Welcome to your new calculator project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with calculator, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd calculator/
dfx help
dfx config --help
```

## notes

```sh
~/Downloads/calculator master*
❯ dfx canister create calculator
  "calculator" canister created with canister id: "75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q"

~/Downloads/calculator master*
❯ dfx build
Cannot find canister id.  Please issue 'dfx canister create calculator_assets'.

~/Downloads/calculator master*
❯ dfx canister create calculator_assets
  "calculator_assets" canister created with canister id: "cxeji-wacaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q"

~/Downloads/calculator master*
❯ dfx build
Building canisters...
Building frontend...

~/Downloads/calculator master*
❯ code .

~/Downloads/calculator master*
❯ dfx build
Building canisters...
Building frontend...

~/Downloads/calculator master*
❯ dfx canister install calc
Cannot find canister id.  Please issue 'dfx canister create calc'.

~/Downloads/calculator master*
❯ dfx canister install -all
error: Found argument '-a' which wasn't expected, or isn't valid in this context

USAGE:
    dfx canister install [FLAGS] [OPTIONS] --all [canister_name]

For more information try --help

~/Downloads/calculator master*
❯ dfx canister install --all
Installing code for canister calculator, with canister_id 75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q
Installing code for canister calculator_assets, with canister_id cxeji-wacaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q

~/Downloads/calculator master* 16s
❯ dfx canister call calc add '(10)'
Cannot find canister id.  Please issue 'dfx canister create calc'.

~/Downloads/calculator master*
❯ dfx canister call calculator add '(10)'
(10)

~/Downloads/calculator master*
❯ dfx canister call calculator --type idl add '(10)'
(20)

~/Downloads/calculator master*
```