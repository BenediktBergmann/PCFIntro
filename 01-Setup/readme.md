# 1. Setup
In this chapter we will setup the everything we need and get familiar with the Power Apps CLI

## Prerequisits
The following prerequisits needs to be installed or configured.

- [Power Apps CLI](https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fpowerapps%2Fdeveloper%2Fcommon-data-service%2Fpowerapps-cli&data=04%7C01%7Cbenedikt.bergmann%40crmkonsulterna.se%7C746004ac0ea443af06ae08d89d08e4c6%7Cbf1275c5f48d4a0989e38eedd5102fbd%7C0%7C0%7C637432008818955345%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=P6KUxo5E96t2hcnlS3bpLn5jZ6xSCEVL6b4nMD%2FEKqA%3D&reserved=0)
- [Visual Studio Code](https://code.visualstudio.com)
- [Test Dataverse environment](https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpowerapps.microsoft.com%2Fcommunityplan%2F&data=04%7C01%7Cbenedikt.bergmann%40crmkonsulterna.se%7C746004ac0ea443af06ae08d89d08e4c6%7Cbf1275c5f48d4a0989e38eedd5102fbd%7C0%7C0%7C637432008818965343%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=nY7B4i4Fl8vNqmstBJ%2FtK4ujqRNtk2je2JU8szzzl9Y%3D&reserved=0)

## Todo's
This paragraph describes what has to be done.

1. Install the Solution "PCFDemo_1_0_0_0.zip" to your environment
2. Create a folder to hold the PCF
2. Open that folder with VS Code
4. Open Terminal within VS Code
5. Install latest "pac" version

`pac install latest`

6. Get yourself familiar with "pac". Some example commands

- `pac`
- `pac auth`
- `pac auth list`

7. Create auth profile to your environment

`pac auth create --url https://<url to org> --name <name>`

## Conclusion
We learned how to use the Power Apps CLI and prepared everything for the creation of our first PCF