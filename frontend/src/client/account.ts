import { HTTPResult, Method, SendRequest } from 'client/common';
import { account } from 'proto/account';


export const FetchUserList = async (req: account.FetchAccountRequest): Promise< HTTPResult<account.FetchAccountResponse> > => {
    return await SendRequest<account.FetchAccountResponse>(Method.GET, `/accounts/`, req);
}