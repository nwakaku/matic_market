import {
  NFTMarket,
  NFTTransfer } from "../generated/NFTMarket/NFTMarket";
import {NFT} from '../generated/schema'

export function handleNFTTransfer(event: NFTTransfer): void {
  const nft = new NFT(event.params.tokenID.toString());
  nft.to = event.params.to;
  nft.from = event.params.from;
  nft.price = event.params.price;
  const nftMarket = NFTMarket.bind(event.address);
  const tokenURI = nftMarket.tokenURI(event.params.tokenID);
  nft.tokenURI = tokenURI;

  nft.save();
}
