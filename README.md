# Azure integration with SAP IAS API

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pacheco7/sap_ias_azure_function_integration/blob/master/LICENSE)

## Table of contents

1. [Introduction](#introduction)
2. [How to install](#howto-install)
3. [How to use](#howto-use)

## Introduction <a name="introduction"></a>

This a opensource project, all help to maintain are come :)

This project was created for attend a necessity of integrate the Azure AD with SAP Identity Authentication Service, without purchase the SAP Identity Provider service.

## How to install <a name="howto-install"></a>

### Prerequisities:

* Have installed the lastest Visual Studio Code software on your machine;
* Have installed Node (8.0+);
* Have installed Homebrew (MacOS only);
* Have a Developer / Administrator account on Azure;
* Have installed the Azure Functions Core Tools (See the section *_Installation);
* A basic know-how about Azure.

## Installation

### Installing the Visual Studio Code

Open this [link](https://code.visualstudio.com) and follow the instructions to install

### Installing the Node

Open this [link](https://nodejs.org/) and follow the instructions to install.

### Installing Homebrew (MacOS only)

Open this [link](https://docs.brew.sh/Installation) and follow the instructions to install.

### Installing the Azure Functions Core Tools

Windows

```bash
npm i -g azure-functions-core-tools@2
```

MacOS

```bash
brew tap azure/functions
brew install azure-functions-core-tools
```

Linux

1. Set up package feed
    * Ubuntu 18.10

        ```bash
        wget -q https://packages.microsoft.com/config/ubuntu/18.10/packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        ```

    * Ubuntu 18.04

        ```bash
        wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        ```

    * Ubuntu 16.04 / Linux Mint 18

        ```bash
        wget -q https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        ```

1. Install

    ```bash
    sudo apt-get update
    sudo apt-get install azure-functions-core-tools
    ```
    
### Installing the Azure functions plugin on Visual Studio Code



First to all, clone or download this project on your machine, open and navigate to the project directory in your terminal and run *__npm install__*.

After the project configuration, go to Visual Studio Code and open the project directoy and install the Azure functions plugin.

You done the installation :)

## How to use <a name="howto-use"></a>

In this phase you must have an Azure account with developer or administrator rights.

Go to the Azure portal and search for "Function Apps" and navigate to this. Follow this document: https://github.com/Microsoft/vscode-azurefunctions/blob/master/README.md



