export interface AuramContactInfoApiResponse {
  error: boolean;
  status: boolean;
  statusCode: number;
  responseTimestamp: Date;
  data: AuramContactInfoModel;
}

export interface AuramContactInfoModel {
  _id: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  email?: string;
  whatsapp?: string;
  phone?: string;
  address?: string;
}
